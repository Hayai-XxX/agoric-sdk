// eslint-disable-next-line import/no-extraneous-dependencies
import '@agoric/zoe/tools/prepare-test-env';
// eslint-disable-next-line import/no-extraneous-dependencies
import test from 'ava';

import { isOfferSafe } from '../../src/contractFacet/offerSafety';
import { setup } from './setupBasicMints';

function makeGetAmountMath(mapping) {
  const brandToAmountMath = new Map(mapping);
  return brand => brandToAmountMath.get(brand);
}

// Potential outcomes:
// 1. Users can get what they wanted, get back what they gave, both, or
// neither
// 2. Users can either get more than, less than, or equal to what they
//    wanted or gave

// possible combinations to test:
// more than want, more than give -> isOfferSafe() = true
// more than want, less than give -> true
// more than want, equal to give -> true
// less than want, more than give -> true
// less than want, less than give -> false
// less than want, equal to give -> true
// equal to want, more than give -> true
// equal to want, less than give -> true
// equal to want, equal to give -> true

// more than want, more than give -> isOfferSafe() = true
test('isOfferSafe - more than want, more than give', t => {
  const { moolaR, simoleanR, bucksR, moola, simoleans, bucks } = setup();
  const getAmountMath = makeGetAmountMath([
    [moolaR.brand, moolaR.amountMath],
    [simoleanR.brand, simoleanR.amountMath],
    [bucksR.brand, bucksR.amountMath],
  ]);
  const proposal = harden({
    give: { A: moola(8) },
    want: { B: simoleans(6), C: bucks(7) },
  });
  const amounts = harden({ A: moola(10), B: simoleans(7), C: bucks(8) });

  t.truthy(isOfferSafe(getAmountMath, proposal, amounts));
});

// more than want, less than give -> true
test('isOfferSafe - more than want, less than give', t => {
  const { moolaR, simoleanR, bucksR, moola, simoleans, bucks } = setup();
  const getAmountMath = makeGetAmountMath([
    [moolaR.brand, moolaR.amountMath],
    [simoleanR.brand, simoleanR.amountMath],
    [bucksR.brand, bucksR.amountMath],
  ]);
  const proposal = harden({
    give: { A: moola(8) },
    want: { B: simoleans(6), C: bucks(7) },
  });
  const amounts = harden({ A: moola(1), B: simoleans(7), C: bucks(8) });

  t.truthy(isOfferSafe(getAmountMath, proposal, amounts));
});

// more than want, equal to give -> true
test('isOfferSafe - more than want, equal to give', t => {
  const { moolaR, simoleanR, bucksR, moola, simoleans, bucks } = setup();
  const getAmountMath = makeGetAmountMath([
    [moolaR.brand, moolaR.amountMath],
    [simoleanR.brand, simoleanR.amountMath],
    [bucksR.brand, bucksR.amountMath],
  ]);
  const proposal = harden({
    want: { A: moola(8) },
    give: { B: simoleans(6), C: bucks(7) },
  });
  const amounts = harden({ A: moola(9), B: simoleans(6), C: bucks(7) });

  t.truthy(isOfferSafe(getAmountMath, proposal, amounts));
});

// less than want, more than give -> true
test('isOfferSafe - less than want, more than give', t => {
  const { moolaR, simoleanR, bucksR, moola, simoleans, bucks } = setup();
  const getAmountMath = makeGetAmountMath([
    [moolaR.brand, moolaR.amountMath],
    [simoleanR.brand, simoleanR.amountMath],
    [bucksR.brand, bucksR.amountMath],
  ]);
  const proposal = harden({
    want: { A: moola(8) },
    give: { B: simoleans(6), C: bucks(7) },
  });
  const amounts = harden({ A: moola(7), B: simoleans(9), C: bucks(19) });

  t.truthy(isOfferSafe(getAmountMath, proposal, amounts));
});

// less than want, less than give -> false
test('isOfferSafe - less than want, less than give', t => {
  const { moolaR, simoleanR, bucksR, moola, simoleans, bucks } = setup();
  const getAmountMath = makeGetAmountMath([
    [moolaR.brand, moolaR.amountMath],
    [simoleanR.brand, simoleanR.amountMath],
    [bucksR.brand, bucksR.amountMath],
  ]);
  const proposal = harden({
    want: { A: moola(8) },
    give: { B: simoleans(6), C: bucks(7) },
  });
  const amounts = harden({ A: moola(7), B: simoleans(5), C: bucks(6) });

  t.falsy(isOfferSafe(getAmountMath, proposal, amounts));
});

// less than want, equal to give -> true
test('isOfferSafe - less than want, equal to give', t => {
  const { moolaR, simoleanR, bucksR, moola, simoleans, bucks } = setup();
  const getAmountMath = makeGetAmountMath([
    [moolaR.brand, moolaR.amountMath],
    [simoleanR.brand, simoleanR.amountMath],
    [bucksR.brand, bucksR.amountMath],
  ]);
  const proposal = harden({
    want: { B: simoleans(6) },
    give: { A: moola(1), C: bucks(7) },
  });
  const amounts = harden({ A: moola(1), B: simoleans(5), C: bucks(7) });

  t.truthy(isOfferSafe(getAmountMath, proposal, amounts));
});

// equal to want, more than give -> true
test('isOfferSafe - equal to want, more than give', t => {
  const { moolaR, simoleanR, bucksR, moola, simoleans, bucks } = setup();
  const getAmountMath = makeGetAmountMath([
    [moolaR.brand, moolaR.amountMath],
    [simoleanR.brand, simoleanR.amountMath],
    [bucksR.brand, bucksR.amountMath],
  ]);
  const proposal = harden({
    want: { B: simoleans(6) },
    give: { A: moola(1), C: bucks(7) },
  });
  const amounts = harden({ A: moola(2), B: simoleans(6), C: bucks(8) });

  t.truthy(isOfferSafe(getAmountMath, proposal, amounts));
});

// equal to want, less than give -> true
test('isOfferSafe - equal to want, less than give', t => {
  const { moolaR, simoleanR, bucksR, moola, simoleans, bucks } = setup();
  const getAmountMath = makeGetAmountMath([
    [moolaR.brand, moolaR.amountMath],
    [simoleanR.brand, simoleanR.amountMath],
    [bucksR.brand, bucksR.amountMath],
  ]);
  const proposal = harden({
    want: { B: simoleans(6) },
    give: { A: moola(1), C: bucks(7) },
  });
  const amounts = harden({ A: moola(0), B: simoleans(6), C: bucks(0) });

  t.truthy(isOfferSafe(getAmountMath, proposal, amounts));
});

// equal to want, equal to give -> true
test('isOfferSafe - equal to want, equal to give', t => {
  const { moolaR, simoleanR, bucksR, moola, simoleans, bucks } = setup();
  const getAmountMath = makeGetAmountMath([
    [moolaR.brand, moolaR.amountMath],
    [simoleanR.brand, simoleanR.amountMath],
    [bucksR.brand, bucksR.amountMath],
  ]);
  const proposal = harden({
    want: { B: simoleans(6) },
    give: { A: moola(1), C: bucks(7) },
  });
  const amounts = harden({ A: moola(1), B: simoleans(6), C: bucks(7) });

  t.truthy(isOfferSafe(getAmountMath, proposal, amounts));
});

test('isOfferSafe - empty proposal', t => {
  const { moolaR, simoleanR, bucksR, moola, simoleans, bucks } = setup();
  const getAmountMath = makeGetAmountMath([
    [moolaR.brand, moolaR.amountMath],
    [simoleanR.brand, simoleanR.amountMath],
    [bucksR.brand, bucksR.amountMath],
  ]);
  const proposal = harden({ give: {}, want: {} });
  const amounts = harden({ A: moola(1), B: simoleans(6), C: bucks(7) });

  t.truthy(isOfferSafe(getAmountMath, proposal, amounts));
});
