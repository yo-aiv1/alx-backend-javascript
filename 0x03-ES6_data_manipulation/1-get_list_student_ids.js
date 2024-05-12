export default function getListStudentIds(StudentsObjectList) {
  const ids = [];
  for (let i = 0; i < StudentsObjectList.length; i++) {
    ids.push(StudentsObjectList[i].ids);
  }
  return ids;
}
