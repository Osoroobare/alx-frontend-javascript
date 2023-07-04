/**
 * Updates the grades.
 * @parameter {{
 *   id: Number,
 *   firstName: String,
 *   location: String
 * }[]} list of students.
 * @parameter {*} city.
 * @parameter {{
 *   studentId: Number,
 *   grade: Number,
 * }[]} newGrades - new grades to be given.
 * @returns {{id: Number, firstName: String, location: String}[]}
 */
export default function updateStudentGradeByCity(students, city, newGrades) {
  const defaultGrade = { grade: 'N/A' };

  if (students instanceof Array) {
    return students
      .filter((student) => student.location === city)
      .map((student) => ({
        id: student.id,
        firstName: student.firstName,
        location: student.location,
        grade: (newGrades
          .filter((grade) => grade.studentId === student.id)
          .pop() || defaultGrade).grade,
      }));
  }
  return [];
}
