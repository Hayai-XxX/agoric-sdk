// @ts-check

import '@agoric/zoe/tools/prepare-test-env';
// eslint-disable-next-line import/no-extraneous-dependencies
import test from 'ava';
import { makeIssuerKit, MathKind } from '@agoric/ertp';

import '../../exported';

import { makeDepositInvitation } from '../../src/depositInvitation';

test('depositInvitation', async t => {
  const { mint, issuer, amountMath } = makeIssuerKit(
    'invitations',
    MathKind.SET,
  );
  const purse = issuer.makeEmptyPurse();
  const paymentAmount = amountMath.make(harden([{ instance: {} }]));
  const payment = mint.mintPayment(paymentAmount);
  const depositInvitation = makeDepositInvitation(purse);
  const result = await depositInvitation(payment);
  t.deepEqual(result, paymentAmount.value[0]);

  const balance = purse.getCurrentAmount();
  t.deepEqual(balance, paymentAmount);
});
