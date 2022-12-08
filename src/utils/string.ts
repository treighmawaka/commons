import { isPhoneNumber } from "./is";

/**
 * Is the given value a string?
 *
 * @param str 
 * @returns 
 */
export function isString(str: any) {
  return typeof str === "string";
}

/**
 * Capitalize the first letter of the given string.
 *
 * @param str 
 */
export function toUpperFirst(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

/**
 * Removes spaces from the given string.
 *
 * @param str 
 * @returns 
 */
 export function removeSpaces(str: string) {
  return str.replace(/ /g, "");
}
 
 /**
  * Removes the last 's' from a plural string.
  *
  * @param str 
  * @returns 
  */
export function singularize(str: string) {
  return str.slice(0, -1);
}
/**
 * Pluralizes the given string.
 *
 * @param string 
 * @param time 
 * @returns 
 */
export function pluralize(string: string, time = 2) {
  return time === 1 ? string : `${string}s`;
}

/**
 * Removes hyphens from a string.
 *
 * @param str 
 * @returns 
 */
export function deHyphenate(str: string) {
  return str.replace("-", "");
}

/**
 * Converts the given string to camel case.
 *
 * @param str 
 * @returns 
 */
export function toCamelCase(str: string) {  
  str = str.toLowerCase();
  
  const pattern = /([-_][a-z])/gi;
  
  const output = str.replace(pattern, ($1) => {
    return $1.toUpperCase().replace("-", "").replace("_", "");
  });
  
  return output;
}

/**
 * Removes all non-alpha characters from the given string.
 *
 * @param str
 * @param toLowerCase
 * @returns
 */
 export function toCleanString(str: string, toLowerCase = false) {  
  const clean = str.replace(/[^a-zA-Z ]/g, "");
  return toLowerCase ? clean.toLowerCase() : clean;
}
 
 /**
 * Checks if two strings are equivalent in the given locale.
 *
 * @param str1
 * @param str2
 * @param locale
 */
export function areEquivalent(str1: string, str2: string, locale = "en") {
  const options = { sensitivity: "accent" };
  const result = str1.localeCompare(str2, locale, options);
  return result == 0;
}

/**
 * Searches for a match between two strings.
 *
 * @param str
 * @param target
 */
 export function matched(str: string, target: string) {
  const regex = new RegExp(target);
  return regex.test(str);
}
 
 /**
 * Replaces text in the given string, using an array of strings.
 *
 * @param str
 * @param replaceList
 * @returns
 */
export function replaceText(str: string, replaceList: string[]) {
  if (replaceList.length === 0) return str;

  let output = str;

  replaceList.forEach((item) => output.replace(item, ""));

  return output;
}

/**
 * Checks if the given string is an email address. 
 * This is helper is intended for basic string checking
 * only.
 *
 * @param value
 * @returns
 */
 export function isEmail(value: string) {
  const pattern = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const regex = new RegExp(pattern);
  return regex.test(value);
}
 
/**
 * Checks if the given email address is an internal one.
 *
 * @param email 
 * @param domain 
 * @returns 
 */
export function isInternalEmail(email: string, domain: string) {
  const regex = new RegExp(`[a-z0-9]+@${domain}`);
  return regex.test(email);
}

/**
 * Converts a camel-cased string into a snake case.
 *
 * @param str 
 * @returns 
 */
export function camelToSnake(str: string) {
  return str.replace(/[\w]([A-Z])/g, (m) => m[0] + "_" + m[1]).toLowerCase();
}

/**
 * Checks if the given string is Camel Case.
 *
 * @param str
 * @returns
 */
 export function isCamelCase(str: string) {
  return /^([a-z]+)(([A-Z]([a-z]+))+)$/.test(str);
}

/**
 * Converts the given string into a kebab case
 * @param str 
 * @returns 
 */
function toKebabCase(str: string) {  
  const KEBAB_REGEX = /[A-Z\u00C0-\u00D6\u00D8-\u00DE]/g;
  return str.replace(KEBAB_REGEX, (match) => "-" + match.toLowerCase());
}

/**
 * Reverses the given kebab-cased string.
 *
 * @param str 
 * @returns 
 */
function reverseBebab(str: string) {
  const REVERSE_KEBARB_REGEX = /-[a-z\u00E0-\u00F6\u00F8-\u00FE]/g;
  return str.replace(REVERSE_KEBARB_REGEX, (match) => match.slice(1).toUpperCase());
}

/**
 * Returns the first name portion of the given name.
 * @param name 
 * @returns 
 */
export function getFirstName(name: string) {  
  // return the first and last name in a string
  // John Famous Smith would become John Smith
  const fullname = name.split(/(\s).+\s/).join("");

  return fullname.split(" ").shift();
}

/**
 * Strips HTML Tags from a string.
 *
 * @param str 
 * @returns 
 */
export function stripTags(str: any) {
  return str.replace(/(<([^>]+)>)/gi, "");  
}

/**
 * Strips tags and remove leading and trailing white space
 * from a string.
 * @param str 
 * @returns 
 */
export function sanitizeString(str: string) {  
  const trimmed = str ? str.trim() : str;
  return stripTags(trimmed);
}

/**
 * North American Phone Number format.
 */
 export const phoneRegex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
 
 /**
  * Formats a North American phone number.
  *
  * @param value
  * @returns
  */
 export function formatPhoneNumber(value: string) {
   if (!isPhoneNumber(value)) return value;
 
   return value.replace(phoneRegex, "($1) $2-$3");
 }