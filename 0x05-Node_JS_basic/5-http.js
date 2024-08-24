const http = require('http');
const fs = require('fs').promises;
const url = require('url');

const app = http.createServer(async (req, res) => {
  const parsedUrl = url.parse(req.url, true);

  if (parsedUrl.pathname === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello Holberton School!');
  } else if (parsedUrl.pathname === '/students') {
    const databasePath = process.argv[2];

    res.writeHead(200, { 'Content-Type': 'text/plain' });
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

      res.write(`Number of students: ${numberOfStudents}\n`);
      for (const [field, info] of Object.entries(fieldCounts)) {
        res.write(`Number of students in ${field}: ${info.count}. List: ${info.names.join(', ')}\n`);
      }
    } catch (err) {
      res.write('Cannot load the database\n');
    }

    res.end();
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
  }
});

app.listen(1245, 'localhost', () => {
  console.log('Server running at http://localhost:1245/');
});

module.exports = app;
