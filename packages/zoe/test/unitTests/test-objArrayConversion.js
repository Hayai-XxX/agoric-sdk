// eslint-disable-next-line import/no-extraneous-dependencies
import '@agoric/zoe/tools/prepare-test-env';
// eslint-disable-next-line import/no-extraneous-dependencies
import test from 'ava';

import { arrayToObj } from '../../src/objArrayConversion';

test('arrayToObj', t => {
  t.plan(3);
  const keywords = ['X', 'Y'];
  const array = [1, 2];
  t.deepEqual(arrayToObj(array, keywords), { X: 1, Y: 2 });

  const keywords2 = ['X', 'Y', 'Z'];
  t.throws(
    () => arrayToObj(array, keywords2),
    { message: 'array and keys must be of equal length' },
    `unequal length should throw`,
  );

  const array2 = [4, 5, 2];
  t.throws(
    () => arrayToObj(array2, keywords),
    { message: 'array and keys must be of equal length' },
    `unequal length should throw`,
  );
});
