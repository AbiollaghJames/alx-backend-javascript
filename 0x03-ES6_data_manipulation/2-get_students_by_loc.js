export default function getStudentsByLocation(students, city) {
  const sameLocality = students.filter((students) => students.location === city);
  return sameLocality;
}
