const fs = require('fs').promises;

function countStudents(path) {
  return fs
    .readFile(path, 'utf-8')
    .then((data) => {
      const lines = data.split('\n').filter((line) => line.trim() !== '');

      if (lines.length < 2) {
        throw new Error('Cannot load the database');
      }

      const header = lines[0].split(',');
      const students = lines.slice(1).map((line) => line.split(','));

      const numberOfStudents = students.length;
      console.log(`Number of students: ${numberOfStudents}`);

      const fields = {};
      students.forEach((student) => {
        const field = student[3];
        if (!fields[field]) {
          fields[field] = [];
        }
        fields[field].push(student[0]);
      });

      for (const [field, names] of Object.entries(fields)) {
        console.log(
          `Number of students in ${field}: ${names.length}. List: ${names.join(
            ', '
          )}`
        );
      }
    })
    .catch(() => {
      throw new Error('Cannot load the database');
    });
}

module.exports = countStudents;
