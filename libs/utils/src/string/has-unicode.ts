/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-misleading-character-class */
const rsAstralRange = '\\ud800-\\udfff';
const rsComboMarksRange = '\\u0300-\\u036f';
const reComboHalfMarksRange = '\\ufe20-\\ufe2f';
const rsComboSymbolsRange = '\\u20d0-\\u20ff';
const rsComboMarksExtendedRange = '\\u1ab0-\\u1aff';
const rsComboMarksSupplementRange = '\\u1dc0-\\u1dff';
const rsComboRange =
  rsComboMarksRange +
  reComboHalfMarksRange +
  rsComboSymbolsRange +
  rsComboMarksExtendedRange +
  rsComboMarksSupplementRange;
const rsVarRange = '\\ufe0e\\ufe0f';

/** Used to compose unicode capture groups. */
const rsZWJ = '\\u200d';

/** Used to detect strings with [zero-width joiners or code points from the astral planes](http://eev.ee/blog/2015/09/12/dark-corners-of-unicode/). */
const reHasUnicode = RegExp(
  `[${rsZWJ + rsAstralRange + rsComboRange + rsVarRange}]`
);

/**
 * Checks if `string` contains Unicode symbols.
 *
 * @private
 */
export const hasUnicode = (string: any): boolean => {
  return reHasUnicode.test(string);
};
