export default function getListStudentIds(StudentsObjectList) {
  if (!Array.isArray(StudentsObjectList)) {
    return [];
  }

  return StudentsObjectList.map((student) => student.id);
}
