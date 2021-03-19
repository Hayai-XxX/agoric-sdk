import { roundToDecimalPlaces } from './roundToDecimalPlaces';

const CONVENTIONAL_DECIMAL_PLACES = 2;

/**
 * @param {NatValue} natValue
 * @param {number=} decimalPlaces
 * @param {number=} placesToShow
 * @returns {string}
 */
export const stringifyNat = (
  natValue = 0n,
  decimalPlaces = 0,
  placesToShow = CONVENTIONAL_DECIMAL_PLACES,
) => {
  const str = `${natValue}`.padStart(decimalPlaces, '0');
  const leftOfDecimalStr = str.substring(0, str.length - decimalPlaces) || '0';
  const rightOfDecimalStr = roundToDecimalPlaces(
    `${str.substring(str.length - decimalPlaces)}`,
    placesToShow,
  );

  if (rightOfDecimalStr === '') {
    return leftOfDecimalStr;
  }

  return `${leftOfDecimalStr}.${rightOfDecimalStr}`;
};
