const fs = require('fs').promises;

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf-8')
      .then((data) => {
        const lines = data.split('\n').filter((line) => line.trim() !== '');

        if (lines.length <= 1) {
          reject(new Error('Cannot load the database'));
          return;
        }

        const students = lines.slice(1).map((line) => line.split(','));

        console.log(`Number of students: ${students.length}`);

        const fields = {};
        students.forEach((student) => {
          const field = student[3];
          const firstName = student[0];

          if (!fields[field]) {
            fields[field] = [];
          }
          fields[field].push(firstName);
        });

        for (const [field, names] of Object.entries(fields)) {
          console.log(
            `Number of students in ${field}: ${
              names.length
            }. List: ${names.join(', ')}`
          );
        }

        resolve();
      })
      .catch(() => {
        reject(new Error('Cannot load the database'));
      });
  });
}

module.exports = countStudents;
