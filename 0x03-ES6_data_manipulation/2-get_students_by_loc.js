export default function getStudentsByLocation(StudentObjectList, city) {
  return StudentObjectList.filter((student) => student.location === city);
}
