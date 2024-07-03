interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: 'Abdelmounaim',
  lastName: 'Malhaoui',
  age: 30,
  location: 'Morocco',
};

const student2: Student = {
  firstName: 'Abdelwahab',
  lastName: 'Karimi',
  age: 29,
  location: 'Los Angeles',
};

const studentsList: Student[] = [student1, student2];

function renderStudentTable(): void {
  const table = document.createElement('table');
  const tableHead = document.createElement('thead');
  const tableRow = document.createElement('tr');
  const firstNameHeader = document.createElement('th');
  const locationHeader = document.createElement('th');

  firstNameHeader.textContent = 'First Name';
  locationHeader.textContent = 'Location';

  tableRow.appendChild(firstNameHeader);
  tableRow.appendChild(locationHeader);
  tableHead.appendChild(tableRow);
  table.appendChild(tableHead);

  const tableBody = document.createElement('tbody');

  studentsList.forEach((student) => {
    const studentRow = document.createElement('tr');
    const firstNameCell = document.createElement('td');
    const locationCell = document.createElement('td');

    firstNameCell.textContent = student.firstName;
    locationCell.textContent = student.location;

    studentRow.appendChild(firstNameCell);
    studentRow.appendChild(locationCell);
    tableBody.appendChild(studentRow);
  });

  table.appendChild(tableBody);
  document.body.appendChild(table);
}

renderStudentTable();
