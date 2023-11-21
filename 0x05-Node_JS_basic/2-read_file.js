const fs = require("fs");

const countStudents = (fPath) => {
    if (!fs.existsSync(fPath) || !fs.statSync(fPath).isFile()) {
        throw new Error("Cannot load the database");
    }

    const file = fs.readFileSync(fPath, 'utf-8').trim().split('\n');
    
    if (file.length === 0) {
        console.log("Cannot load the database");
        return;
    }

    const students = {};
    const fieldNames = file[0].split(',');
    const studentNames = fieldNames.slice(0, -1);

    for (const line of file.slice(1)) {
        if (!line.trim()) {
            continue;
        }

        const records = line.split(',');
        const studentValue = records.slice(0, -1);
        const field = records[records.length - 1];

        if (!Object.keys(students).includes(field)) {
            students[field] = [];
        }

        const entries = studentNames.map((name, i) => [name, studentValue[i]]);
        students[field].push(Object.fromEntries(entries));
    }

    const totalStudents = Object.values(students).reduce((pre, cur) => pre + cur.length, 0);
    console.log(`Number of students: ${totalStudents}`);

    for (const [field, group] of Object.entries(students)) {
        const studentNames = group.map((student) => student.firstname).join(', ');
        console.log(`Number of students in ${field}: ${group.length}. List: ${studentNames}`);
    }
};

module.exports = countStudents;
