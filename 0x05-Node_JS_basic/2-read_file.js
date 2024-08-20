const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf8');
    const lines = data.split('\n');
    const filteredLines = lines.filter((line) => line.trim() !== '').slice(1);
    const numberOfStudents = filteredLines.length;
    const fieldCounts = {};

    filteredLines.forEach((line) => {
      // eslint-disable-next-line no-unused-vars
      const [firstname, lastname, age, field] = line.split(',');
      if (!fieldCounts[field]) {
        fieldCounts[field] = { count: 0, names: [] };
      }

      fieldCounts[field].count += 1;
      fieldCounts[field].names.push(firstname);
    });

    console.log(`Number of students: ${numberOfStudents}`);
    for (const [field, info] of Object.entries(fieldCounts)) {
      console.log(`Number of students in ${field}: ${info.count}. List: ${info.names.join(', ')}`);
    }
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
