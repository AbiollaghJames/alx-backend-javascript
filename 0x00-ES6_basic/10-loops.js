export default function appendToEachArrayValue(array, appendString) {
  newArr = [];
  for (const elem of array) {
    newArr.push(appendString + elem);
  }

  return array;
}
