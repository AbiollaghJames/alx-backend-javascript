export default function createInt8TypedArray(length, position, value) {
  if (position < 0 || position >= length) {
    throw new Error('Position outside range');
  }

  const buffer = new ArrayBuffer(length);
  const viewArr = new Int8Array(buffer);
  viewArr[position] = value;

  return buffer;
}
