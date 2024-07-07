export default function getStudentsByLocation(students, city) {
  return students.filter((object) => object.location === city);
}
