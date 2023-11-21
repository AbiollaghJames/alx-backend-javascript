const http = require("http");
const countStudents = require("./3-read_file_async");

const port = 1245;
const host = '127.0.0.1';
const [DATABASE] = process.argv.slice(2);

const app = http.createServer(async (req, res) => {
    res.setHeader('Content-Type', 'text/plain');

    const { url } = req;
    if (url === '/') {
        res.end("Hello Holberton School!");
    } else if (url === '/students') {
        try {
            const std = await countStudents(DATABASE);
            res.end(`This is the list of our students\n ${std.join('\n')}`);
        } catch (error) {
            res.end(error.message);
        }
    } else {
        res.statusCode = 404;
        res.end();
    }
});

app.listen(port, host, () => {
    console.log(`Running on port ${port}`);
});