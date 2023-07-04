/**
 * Gets ids from a list of students.
 * @parameter {{
 *   id: Number,
 *   firstName: String,
 *   location: String,
 * }[]} students - list of students.
 * @returns
 */
export default function getListStudentIds(students) {
  if (students instanceof Array) {
    return students.map((student) => student.id);
  }
  return [];
}
