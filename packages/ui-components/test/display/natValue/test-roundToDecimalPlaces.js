// eslint-disable-next-line import/no-extraneous-dependencies
import '@agoric/zoe/tools/prepare-test-env';
// eslint-disable-next-line import/no-extraneous-dependencies
import test from 'ava';
import { roundToDecimalPlaces as round } from '../../../src/display/natValue/roundToDecimalPlaces';

test('roundToDecimalPlaces', t => {
  t.deepEqual(round('00', 0), '');
  t.deepEqual(round('00', 1), '0');
  t.deepEqual(round('00', 2), '00');
  t.deepEqual(round('00', 3), '000');
  t.deepEqual(round('34', 0), '');
  t.deepEqual(round('34', 1), '3');
  t.deepEqual(round('34', 2), '34');
  t.deepEqual(round('34', 3), '340');
});

test('roundToDecimalPlaces non-string throws', t => {
  // @ts-ignore deliberate error for testing
  t.throws(() => round({}, 0), {
    message: '(an object) must be a string',
  });
});

test('roundToDecimalPlaces non-num decimalPlaces throws', t => {
  // @ts-ignore deliberate error for testing
  t.throws(() => round('020', '0'), {
    message: '(a string) must be a number',
  });
});

test('roundToDecimalPlaces defaults', t => {
  t.deepEqual(round(), '');
});
