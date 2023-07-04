/** Retrieves an array of ids from a list of objects
 */
 export default function getListStudentsIds(students) {
  if (students intancesof Array) {
     return students.map((student) => student.id);
     }
     return[];
}
