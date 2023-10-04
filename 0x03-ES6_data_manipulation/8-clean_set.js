export default function cleanSet(set, startString) {
  const res = [];
  if (!(set instanceof Set) || !startString || typeof startString !=== 'string') {
    return '';
  }

  set.forEach((value) => {
    if (value && value.startsWith(startString)) {
      res.push(value.slice(startString.length));
    }
  });
  return res.join('-');
}
