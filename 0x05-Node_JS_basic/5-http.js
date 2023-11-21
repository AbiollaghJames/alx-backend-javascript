const http = require('http');
const countStudents = require('./3-read_file_async');
const args = process.argv.slice(2);

const DATABASE = args[0];

const host = '127.0.0.1';
const port = 1245;

const app = http.createServer(async (req, res) => {
  res.setHeader(200, 'Content-Type', 'text/plain');

  const { url } = req;

  if (url === '/') {
    res.write('Hello Holberton School!');
  } else if (url === '/students') {
    res.write('This is the list of our students\n');
    try {
      const students = await countStudents(DATABASE);
      res.end(`${students.join('\n')}`);
    } catch (error) {
      res.end(error.message);
    }
  }
  res.statusCode = 404;
  res.end();
});

app.listen(port, host, () => {
  console.log(`Running on port ${port}/`);
});

module.exports = app;