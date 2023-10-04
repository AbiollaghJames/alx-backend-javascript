export default function cleanSet(set, startString) {
  const res = [];
  if (!(set instanceof Set) || !startString) {
    return '';
  }

  set.forEach((value) => {
    if (value && value.startWith(startString)) {
      res.push(value.slice(startString.length));
    }
  });
  return res.join('-');
}
