export default function getStudentIdsSum(students) {
  const sum = students.reduce((acc, std) => acc + std.id, 0);
  return sum;
}
