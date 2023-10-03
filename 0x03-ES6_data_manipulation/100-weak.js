export const weakMap = new WeakMap();

export function queryAPI(endpoint) {
  const cnt = weakMap.get(endpoint) + 1 || 1;
  weakMap.set(endpoint, cnt);

  if (weakMap.get(endpoint) >= 5) {
    throw new Error('Endpoint load is high');
  }
}
