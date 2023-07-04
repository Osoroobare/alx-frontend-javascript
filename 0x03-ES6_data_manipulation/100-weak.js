/**
 * A  weak map.
 */
export const weakMap = new WeakMap();
/**
 * max number of calls.
 */
const MAX_ENDPOINT_CALLS = 5;
/**
 * Tracks the number of calls made to an API's endpoint.
 * @parameter {{
 *   protocol: String,
 *   name: String,
 * }} endpoint
 */
export function queryAPI(endpoint) {
  if (!weakMap.has(endpoint)) {
    weakMap.set(endpoint, 0);
  }
  weakMap.set(endpoint, weakMap.get(endpoint) + 1);
  if (weakMap.get(endpoint) >= MAX_ENDPOINT_CALLS) {
    throw new Error('Endpoint load is high');
  }
}
