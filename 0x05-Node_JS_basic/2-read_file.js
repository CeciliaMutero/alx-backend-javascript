const fs = require('fs');

function countStudents(filePath) {
  let data;
  try {
    data = fs.readFileSync(filePath, 'utf8');
  } catch (error) {
    throw new Error('Cannot load the database');
  }

  const lines = data.split('\n').filter((line) => line.trim() !== '');
  const students = {};

  for (const line of lines) {
    const [firstName, field] = line.split(',');
    if (field) {
      if (!students[field]) {
        students[field] = [];
      }
      students[field].push(firstName);
    }
  }

  const totalStudents = lines.length;

  console.log(`Number of students: ${totalStudents}`);

  for (const [field, names] of Object.entries(students)) {
    console.log(
      `Number of students in ${field}: ${names.length}. List: ${names.join(
        ', ',
      )}`,
    );
  }
}

module.exports = countStudents;
