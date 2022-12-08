import { BasicObject } from "../types"
import { toCamelCase } from "./string"

/**
 * Converts the keys of the given objec to camel case.
 *
 * @param object 
 * @returns 
 */
function toCamelCasedObject(object: BasicObject) {
  return Object
    .entries(object)
    .reduce((carry: BasicObject, [key, value]) => {
      carry[toCamelCase(key)] = value
      return carry
    }, {})
}