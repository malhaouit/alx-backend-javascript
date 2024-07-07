export default function getStudentIdsSum(students) {
  return students.reduce((accumulator, currentObject) => accumulator + currentObject.id, 0);
}
