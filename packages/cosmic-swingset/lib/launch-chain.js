import path from 'path';
import anylogger from 'anylogger';

import { MeterProvider } from '@opentelemetry/metrics';

import {
  buildMailbox,
  buildMailboxStateMap,
  buildTimer,
  buildBridge,
  swingsetIsInitialized,
  initializeSwingset,
  makeSwingsetController,
  loadBasedir,
  loadSwingsetConfigFile,
} from '@agoric/swingset-vat';
import { assert, details as X } from '@agoric/assert';
import { getBestSwingStore } from './check-lmdb';
import { exportKernelStats } from './kernel-stats';

const log = anylogger('launch-chain');

const SWING_STORE_META_KEY = 'cosmos/meta';

// This is how many cranks we run per block, as per #2299.
// TODO Make it dependent upon metering instead.
const FIXME_MAX_CRANKS_PER_BLOCK = 1000;

export const HISTOGRAM_SECONDS_LATENCY_BOUNDARIES = [
  0.005,
  0.01,
  0.025,
  0.05,
  0.1,
  0.25,
  0.5,
  1,
  2.5,
  5,
  10,
  Infinity,
];

async function buildSwingset(
  mailboxStorage,
  bridgeOutbound,
  storage,
  vatsDir,
  argv,
  debugName = undefined,
  defaultManagerType,
) {
  const debugPrefix = debugName === undefined ? '' : `${debugName}:`;
  let config = loadSwingsetConfigFile(`${vatsDir}/chain-config.json`);
  if (config === null) {
    config = loadBasedir(vatsDir);
  }
  const mbs = buildMailboxStateMap(mailboxStorage);
  const timer = buildTimer();
  const mb = buildMailbox(mbs);
  const bd = buildBridge(bridgeOutbound);
  config.devices = {
    bridge: {
      sourceSpec: bd.srcPath,
    },
    mailbox: {
      sourceSpec: mb.srcPath,
    },
    timer: {
      sourceSpec: timer.srcPath,
    },
  };
  const deviceEndowments = {
    bridge: { ...bd.endowments },
    mailbox: { ...mb.endowments },
    timer: { ...timer.endowments },
  };

  if (!swingsetIsInitialized(storage)) {
    await initializeSwingset(config, argv, storage, {
      debugPrefix,
      defaultManagerType,
    });
  }
  const controller = await makeSwingsetController(storage, deviceEndowments);

  // We DON'T want to run the kernel yet, only when we're in the scheduler at
  // endBlock!

  const bridgeInbound = bd.deliverInbound;
  return { controller, mb, bridgeInbound, timer };
}

export async function launch(
  kernelStateDBDir,
  mailboxStorage,
  doOutboundBridge,
  vatsDir,
  argv,
  debugName = undefined,
  meterProvider = new MeterProvider(),
  defaultManagerType,
) {
  log.info('Launching SwingSet kernel');

  const tempdir = path.resolve(kernelStateDBDir, 'check-lmdb-tempdir');
  const { openSwingStore } = getBestSwingStore(tempdir);
  const { storage, commit } = openSwingStore(kernelStateDBDir);

  function bridgeOutbound(dstID, obj) {
    // console.error('would outbound bridge', dstID, obj);
    return doOutboundBridge(dstID, obj);
  }
  log.debug(`buildSwingset`);
  const { controller, mb, bridgeInbound, timer } = await buildSwingset(
    mailboxStorage,
    bridgeOutbound,
    storage,
    vatsDir,
    argv,
    debugName,
    defaultManagerType,
  );

  const METRIC_LABELS = { app: 'ag-chain-cosmos' };

  // Not to be confused with the gas model, this meter is for OpenTelemetry.
  const metricMeter = meterProvider.getMeter('ag-chain-cosmos');
  exportKernelStats({ controller, metricMeter, log, labels: METRIC_LABELS });

  const schedulerCrankTimeHistogram = metricMeter
    .createValueRecorder('swingset_crank_processing_time', {
      description: 'Processing time per crank (ms)',
      boundaries: [1, 11, 21, 31, 41, 51, 61, 71, 81, 91, Infinity],
    })
    .bind(METRIC_LABELS);

  const schedulerBlockTimeHistogram = metricMeter
    .createValueRecorder('swingset_block_processing_seconds', {
      description: 'Processing time per block',
      boundaries: HISTOGRAM_SECONDS_LATENCY_BOUNDARIES,
    })
    .bind(METRIC_LABELS);

  // ////////////////////////////
  // TODO: This is where we would add the scheduler.
  async function endBlock(_blockHeight, _blockTime) {
    let now = Date.now();
    const blockStart = now;
    let stepsRemaining = FIXME_MAX_CRANKS_PER_BLOCK;
    let stepped = true;
    while (stepped && stepsRemaining > 0) {
      const crankStart = now;
      // eslint-disable-next-line no-await-in-loop
      stepped = await controller.step();
      now = Date.now();
      schedulerCrankTimeHistogram.record(now - crankStart);
      stepsRemaining -= 1;
    }
    schedulerBlockTimeHistogram.record((now - blockStart) / 1000);
  }

  async function saveChainState() {
    // Save the mailbox state.
    await mailboxStorage.commit();
  }

  async function saveOutsideState(savedHeight, savedActions, savedChainSends) {
    storage.set(
      SWING_STORE_META_KEY,
      JSON.stringify([savedHeight, savedActions, savedChainSends]),
    );
    await commit();
  }

  async function deliverInbound(sender, messages, ack) {
    assert(Array.isArray(messages), X`inbound given non-Array: ${messages}`);
    if (!mb.deliverInbound(sender, messages, ack)) {
      return;
    }
    log.debug(`mboxDeliver:   ADDED messages`);
  }

  async function doBridgeInbound(source, body) {
    // console.log(`doBridgeInbound`);
    // the inbound bridge will push messages onto the kernel run-queue for
    // delivery+dispatch to some handler vat
    bridgeInbound(source, body);
  }

  async function beginBlock(blockHeight, blockTime) {
    const addedToQueue = timer.poll(blockTime);
    log.debug(
      `polled; blockTime:${blockTime}, h:${blockHeight}; ADDED =`,
      addedToQueue,
    );
  }

  const [savedHeight, savedActions, savedChainSends] = JSON.parse(
    storage.get(SWING_STORE_META_KEY) || '[0, [], []]',
  );
  return {
    deliverInbound,
    doBridgeInbound,
    // bridgeOutbound,
    beginBlock,
    endBlock,
    saveChainState,
    saveOutsideState,
    savedHeight,
    savedActions,
    savedChainSends,
  };
}
