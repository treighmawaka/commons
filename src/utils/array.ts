import { BasicObject } from "../types/basic";

/**
 * Sorts an array of objects by a property value.
 *
 * @param list
 * @param key
 * @returns
 */
export function sortList(list: BasicObject[], key: string) {
  if (!key) return list;
  return list.sort((a, b) => (a[key] > b[key] ? 1 : -1));
}

/**
 * Checks whether the index is the last in the list.
 *
 * @param index 
 * @param list 
 * @returns 
 */
export function isLastIndex(index: number, list: any[] = []) {
  return list.length - index <= 1;
}

/**
 * Groups an array of objects by the given property.
 *
 * @param key The property used to group objects in the array.
 * @param list The array being grouped.
 */
 export function groupByKey(key: string, list: BasicObject[] = []) {
	if (!Array.isArray(list)) return list;

	const grouped = list.reduce((accumulator, value) => {
		// get the name of the key used
		// to group the array as the array key
		const property = value[key];

		// group initialization
		if (!accumulator[property]) accumulator[property] = [];

		// add the current value to the array
		accumulator[property].push(value);

		// return the transformed array
		return accumulator;
	}, {});

	return grouped;
}
 
/**
 * Removes duplicates from an array of objects.
 * 
 * @param list
 * @param key
 * @returns
 */
 export function removeDuplicatesByKey(list: BasicObject[], key = "id") {
	if (!Array.isArray(list)) return list;
	return [...new Map(list.map((m) => [m[key], m])).values()];
}