/* eslint-disable @typescript-eslint/no-explicit-any */
const toString = Object.prototype.toString;

/**
 * Gets the `toStringTag` of `value`.
 */
export function getTag(value: any) {
  return value === undefined
    ? '[object Undefined]'
    : value === null
    ? '[object Null]'
    : toString.call(value);
}
