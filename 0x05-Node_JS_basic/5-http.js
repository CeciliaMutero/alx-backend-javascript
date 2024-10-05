const http = require('http');
const fs = require('fs').promises;

async function countStudents(path) {
  try {
    const data = await fs.readFile(path, 'utf-8');
    const lines = data.split('\n').filter((line) => line.trim() !== '');

    if (lines.length < 2) {
      throw new Error('Cannot load the database');
    }

    const students = lines.slice(1).map((line) => line.split(','));
    const numberOfStudents = students.length;

    let response = `Number of students: ${numberOfStudents}\n`;

    const fields = {};
    students.forEach((student) => {
      const field = student[3];
      if (!fields[field]) {
        fields[field] = [];
      }
      fields[field].push(student[0]);
    });

    for (const [field, names] of Object.entries(fields)) {
      response += `Number of students in ${field}: ${
        names.length
      }. List: ${names.join(', ')}\n`;
    }

    return response.trim();
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

const app = http.createServer(async (req, res) => {
  res.setHeader('Content-Type', 'text/plain');

  if (req.url === '/') {
    res.statusCode = 200;
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    const databasePath = process.argv[2];

    if (!databasePath) {
      res.statusCode = 500;
      res.end('Database path not provided.');
    } else {
      try {
        const studentData = await countStudents(databasePath);
        res.statusCode = 200;
        res.end(`This is the list of our students\n${studentData}`);
      } catch (error) {
        res.statusCode = 500;
        res.end(error.message);
      }
    }
  } else {
    res.statusCode = 404;
    res.end('Not Found');
  }
});

app.listen(1245, () => {
  console.log('Server is listening on port 1245');
});

module.exports = app;
