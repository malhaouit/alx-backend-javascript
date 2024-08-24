const fs = require('fs').promises;

function countStudents(path) {
  return fs.readFile(path, 'utf8')
    .then((data) => {
      const lines = data.split('\n');
      const filteredLines = lines.filter((line) => line.trim() !== '').slice(1);
      const numberOfStudents = filteredLines.length;

      const fieldCounts = {};

      filteredLines.forEach((line) => {
        const [firstname, , , field] = line.split(',');

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
    })
    .catch(() => {
      throw new Error('Cannot load the database');
    });
}

module.exports = countStudents;
