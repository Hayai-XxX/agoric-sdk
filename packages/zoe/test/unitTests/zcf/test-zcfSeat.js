/* global __dirname */
// eslint-disable-next-line import/no-extraneous-dependencies
import '@agoric/zoe/tools/prepare-test-env';
// eslint-disable-next-line import/no-extraneous-dependencies
import test from 'ava';

import { E } from '@agoric/eventual-send';
import bundleSource from '@agoric/bundle-source';

// noinspection ES6PreferShortImport
import { makeZoe } from '../../../src/zoeService/zoe';
import { setup } from '../setupBasicMints';
import { makeFakeVatAdmin } from '../../../src/contractFacet/fakeVatAdmin';

import '../../../exported';

const contractRoot = `${__dirname}/zcfTesterContract`;

test(`zoe - zcfSeat.fail() doesn't throw`, async t => {
  const { moolaIssuer, simoleanIssuer } = setup();
  let testJig;
  const setJig = jig => {
    testJig = jig;
  };
  const { admin: fakeVatAdminSvc, vatAdminState } = makeFakeVatAdmin(setJig);
  const zoe = makeZoe(fakeVatAdminSvc);

  // pack the contract
  const bundle = await bundleSource(contractRoot);
  // install the contract
  const installation = await zoe.install(bundle);

  // Alice creates an instance
  const issuerKeywordRecord = harden({
    Pixels: moolaIssuer,
    Money: simoleanIssuer,
  });

  // eslint-disable-next-line no-unused-vars
  const { creatorFacet } = await E(zoe).startInstance(
    installation,
    issuerKeywordRecord,
  );

  // The contract uses the testJig so the contractFacet
  // is available here for testing purposes
  /** @type {ContractFacet} */
  const zcf = testJig.zcf;

  let firstSeat;

  const grabSeat = seat => {
    firstSeat = seat;
    return 'ok';
  };

  const failSeat = secondSeat => {
    firstSeat.fail(new Error('first seat failed'));
    throw secondSeat.fail(new Error('second seat failed'));
  };

  const invitation1 = await zcf.makeInvitation(grabSeat, 'seat1');
  const invitation2 = await zcf.makeInvitation(failSeat, 'seat2');

  const userSeat1 = await E(zoe).offer(invitation1);
  const userSeat2 = await E(zoe).offer(invitation2);

  t.is(await E(userSeat1).getOfferResult(), 'ok', `userSeat1 offer result`);

  t.deepEqual(await E(userSeat2).getPayouts(), {});

  await t.throwsAsync(E(userSeat2).getOfferResult(), {
    message: 'second seat failed',
  });
  await t.throwsAsync(() => E(userSeat1).tryExit(), {
    message: 'seat has been exited',
  });
  t.falsy(vatAdminState.getHasExited());
});
