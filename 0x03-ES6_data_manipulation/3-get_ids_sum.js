export default function getStudentIdsSum(StudentObjectList) {
  return StudentObjectList.reduce((sum, student) => sum + student.id, 0);
}
