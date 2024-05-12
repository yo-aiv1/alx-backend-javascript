export default function updateStudentGradeByCity(StudentObjectList, city, NewData) {
  return StudentObjectList
    .filter((student) => student.location === city)
    .map((student) => {
      const gradeObj = NewData.find(
        (grade) => grade.studentId === student.id,
      );
      const grade = gradeObj ? gradeObj.grade : 'N/A';
      return { ...student, grade };
    });
}
