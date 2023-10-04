interface Student {
  firstName: string.
  lastName: string,
  age: number,
  location: string
}

const student1: Student = {
  firstName: 'James',
  lastName: 'Abiolla',
  age: 26,
  location: 'Thika'
};

const student2: Student = {
  firstName: 'Faith',
  lastName: 'Nyaberi',
  age: 22,
  location: 'Nairobi'
};

const studentsList: Student[] = [student1, student2];

//Getting table and table body elements
const tb = document.getElementById("studentTable");
const tbBody = tb.querySelector("tbBody");

//looping through studentsList an appending rows to table
studentsList.forEach((student) => {
  const row = document.createElement("tr");

  const firstCellName = document.createElement("td");
  firstCellName.textContent = student.firstName;

  const locationCell = document.createElement("td");
  locationCell.textContent = student.location;

  row.appendChild(firstCellName);
  row.appendChild(locationCell);

  tbBody.appendChild(row);
});
