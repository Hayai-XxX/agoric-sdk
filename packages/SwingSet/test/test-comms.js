import '@agoric/install-ses';
import test from 'ava';
import buildCommsDispatch from '../src/vats/comms';
import { flipRemoteSlot } from '../src/vats/comms/parseRemoteSlot';
import { makeState, makeStateKit } from '../src/vats/comms/state';
import { makeCListKit } from '../src/vats/comms/clist';
import { addRemote } from '../src/vats/comms/remote';
import { debugState } from '../src/vats/comms/dispatch';
import { makeMessage, makeDropExports } from './util';

test('provideRemoteForLocal', t => {
  const s = makeState(0);
  const stateKit = makeStateKit(s);
  const fakeSyscall = {};
  const clistKit = makeCListKit(s, fakeSyscall, stateKit);
  const { provideRemoteForLocal } = clistKit;
  const { remoteID } = addRemote(s, 'remote1', 'o-1');

  t.is(provideRemoteForLocal(remoteID, 'o-4'), 'ro-20');
  t.is(provideRemoteForLocal(remoteID, 'o-4'), 'ro-20');
  t.is(provideRemoteForLocal(remoteID, 'o-5'), 'ro-21');
  t.throws(() => provideRemoteForLocal(remoteID, 'o+5'), {
    message: /sending non-remote object "o\+5" to remote machine/,
  });
});

function mockSyscall() {
  const sends = [];
  const syscall = harden({
    send(targetSlot, method, args) {
      sends.push([targetSlot, method, args]);
      return 'r-1';
    },
    subscribe(_targetSlot) {},
  });
  return { syscall, sends };
}

function capdata(body, slots = []) {
  return harden({ body, slots });
}

function encodeArgs(body) {
  return capdata(JSON.stringify([body]), []);
}

test('transmit', t => {
  // look at machine A, on which some local vat is sending messages to a
  // remote 'bob' on machine B
  const { syscall, sends } = mockSyscall();
  const dispatch = buildCommsDispatch(syscall, 'fakestate', 'fakehelpers');
  const { state, clistKit } = debugState.get(dispatch);
  const { provideLocalForRemote, getLocalForRemote } = clistKit;
  // add the remote, and an object to send at
  const transmitterID = 'o-1';
  const alice = 'o-10';
  const { remoteID } = addRemote(state, 'remote1', transmitterID);
  const bob = provideLocalForRemote(remoteID, 'ro-23');

  // now tell the comms vat to send a message to a remote machine, the
  // equivalent of bob!foo()
  dispatch(makeMessage(bob, 'foo', capdata('argsbytes', [])));
  t.deepEqual(sends.shift(), [
    transmitterID,
    'transmit',
    encodeArgs('deliver:ro+23:foo:;argsbytes'),
  ]);

  // bob!bar(alice, bob)
  dispatch(makeMessage(bob, 'bar', capdata('argsbytes', [alice, bob])));
  t.deepEqual(sends.shift(), [
    transmitterID,
    'transmit',
    encodeArgs('deliver:ro+23:bar::ro-20:ro+23;argsbytes'),
  ]);
  // the outbound ro-20 should match an inbound ro+20, both represent 'alice'
  t.is(getLocalForRemote(remoteID, 'ro+20'), alice);
  // do it again, should use same values
  dispatch(makeMessage(bob, 'bar', capdata('argsbytes', [alice, bob])));
  t.deepEqual(sends.shift(), [
    transmitterID,
    'transmit',
    encodeArgs('deliver:ro+23:bar::ro-20:ro+23;argsbytes'),
  ]);

  // bob!cat(alice, bob, ayana)
  const ayana = 'o-11';
  dispatch(makeMessage(bob, 'cat', capdata('argsbytes', [alice, bob, ayana])));
  t.deepEqual(sends.shift(), [
    transmitterID,
    'transmit',
    encodeArgs('deliver:ro+23:cat::ro-20:ro+23:ro-21;argsbytes'),
  ]);
});

test('receive', t => {
  // look at machine B, which is receiving remote messages aimed at a local
  // vat's object 'bob'
  const { syscall, sends } = mockSyscall();
  const dispatch = buildCommsDispatch(syscall, 'fakestate', 'fakehelpers');
  const { state, clistKit } = debugState.get(dispatch);
  const { provideRemoteForLocal, getRemoteForLocal } = clistKit;
  // add the remote, and an object to send at
  const transmitterID = 'o-1';
  const bob = 'o-10';
  const { remoteID, receiverID } = addRemote(state, 'remote1', transmitterID);
  const remoteBob = flipRemoteSlot(provideRemoteForLocal(remoteID, bob));
  t.is(remoteBob, 'ro+20');

  // now pretend the transport layer received a message from remote1, as if
  // the remote machine had performed bob!foo()
  dispatch(
    makeMessage(
      receiverID,
      'receive',
      encodeArgs(`deliver:${remoteBob}:foo:;argsbytes`),
    ),
  );
  t.deepEqual(sends.shift(), [bob, 'foo', capdata('argsbytes')]);

  // bob!bar(alice, bob)
  dispatch(
    makeMessage(
      receiverID,
      'receive',
      encodeArgs(`deliver:${remoteBob}:bar::ro-20:${remoteBob};argsbytes`),
    ),
  );
  const expectedAlice = 'o+11';
  t.deepEqual(sends.shift(), [
    bob,
    'bar',
    capdata('argsbytes', [expectedAlice, bob]),
  ]);
  // if we were to send o+11, the other side should get ro+20, which is alice
  t.is(getRemoteForLocal(remoteID, expectedAlice), 'ro+20');

  // bob!bar(alice, bob)
  dispatch(
    makeMessage(
      receiverID,
      'receive',
      encodeArgs(`deliver:${remoteBob}:bar::ro-20:${remoteBob};argsbytes`),
    ),
  );
  t.deepEqual(sends.shift(), [
    bob,
    'bar',
    capdata('argsbytes', [expectedAlice, bob]),
  ]);

  // bob!cat(alice, bob, ayana)
  const expectedAyana = 'o+12';
  dispatch(
    makeMessage(
      receiverID,
      'receive',
      encodeArgs(
        `deliver:${remoteBob}:cat::ro-20:${remoteBob}:ro-21;argsbytes`,
      ),
    ),
  );
  t.deepEqual(sends.shift(), [
    bob,
    'cat',
    capdata('argsbytes', [expectedAlice, bob, expectedAyana]),
  ]);

  // make sure comms can tolerate dropExports, even if it's a no-op
  dispatch(makeDropExports(expectedAlice, expectedAyana));
});
