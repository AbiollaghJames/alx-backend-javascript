export default function cleanSet(set, startString) {
  if (!(set instanceof Set) || startString === '') {
    return '';
  }

  const filteredVal = [...set].filter((value) => value.startsWith(startString));
  const res = [...filteredVal].map((value) => value.slice(startString.length)).join('-');
  return res;
}
