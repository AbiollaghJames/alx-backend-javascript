const fs = require("fs");

function readDatabase(dbPath) {
    return new Promise((resolve, reject) => {
        fs.readFile(dbPath, 'utf-8', (err, data) => {
            if (err) {
                reject(Error(err));
                return;
            }
            const fileContent = data.toString().split('\n');
            let students = fileContent.filter((item) => item);
            students = students.map((item) => item.split(','));

            const dbFileds = {};
            for (const std in students) {
                if (std !== 0) {
                    if (!dbFileds[students[std][3]]) dbFileds[students[std][3]] = [];
                    dbFileds[students[std][3]].push(students[std][0]);
                }
            }
            delete dbFileds.dbField;
            resolve(dbFileds);
        });
    });
}

module.exports = readDatabase;