const express = require('express');
const fs = require('fs').promises;

const app = express();

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', async (req, res) => {
  const databasePath = process.argv[2];

  res.write('This is the list of our students\n');

  try {
    const data = await fs.readFile(databasePath, 'utf8');
    const lines = data.split('\n').filter((line) => line.trim() !== '').slice(1);
    const numberOfStudents = lines.length;

    const fieldCounts = {};
    lines.forEach((line) => {
      const [firstname, , , field] = line.split(',');
      if (!fieldCounts[field]) {
        fieldCounts[field] = { count: 0, names: [] };
      }
      fieldCounts[field].count += 1;
      fieldCounts[field].names.push(firstname);
    });

    res.write(`Number of students: ${numberOfStudents}`);
    for (const [field, info] of Object.entries(fieldCounts)) {
      res.write(`\nNumber of students in ${field}: ${info.count}. List: ${info.names.join(', ')}`);
    }
  } catch (err) {
    res.write('Cannot load the database');
  }

  res.end();
});

app.listen(1245, 'localhost', () => {
  console.log('Express server running on port 1245');
});

module.exports = app;
