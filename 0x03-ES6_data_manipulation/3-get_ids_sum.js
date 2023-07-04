/**
 * Gets the sum of ids from a list of students.
 * @parameter {{
 *   id: Number,
 *   firstName: String,
 *   location: String,
 * }[]} list of students
 * @returns {ids}
 */
export default function getStudentIdsSum(students) {
  if (students instanceof Array) {
    return students.reduce(
      (previousStudent, currentStudent) => previousStudent.id || previousStudent + currentStudent.id,
      0,
    );
  }
  return 0;
}
