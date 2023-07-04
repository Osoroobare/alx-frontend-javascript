/**
 * Retrieves students in a given location.
 * @parameter {{
 *   id: Number,
 *   firstName: String,
 *   location: String,
 * }[]} list of students.
 * @param {String} city.
 * @returns
 */
export default function getStudentsByLocation(students, city) {
  if (students instanceof Array) {
    return students.filter((student) => student.location === city);
  }
  return [];
}
