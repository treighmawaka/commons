/**
 * Checks if the given value is null, empty or undefined.
 *
 * @param v
 * @returns
 */
 export function isNullish(v: any) {
	return ["", null, undefined].includes(v);
}
 
 /**
  * Checks if the given value is a number.
  *
  * @param v 
  * @returns 
  */
 export function isNumber(v: any) {
   return typeof v === "number"
 }
 
 /**
  * Checks if the given value is a string.
  *
  * @param v 
  * @returns 
  */
 export function isString(v: any) {
  return typeof v === "string"
 }
 
 /**
  * Checks if the given value is an array.
  */
 export const isArray = Array.isArray;
 
 /**
  * Checks if the given value is a Date.
  *
  * @param v 
  * @returns 
  */
 export function isDate(v: any) {
   return v instanceof Date;
 }