const form = document.getElementById('userForm');
const table = document.getElementById('dataTable').getElementsByTagName('tbody')[0];

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;

    const row = table.insertRow();
    row.innerHTML = `
        <td>${firstName}</td>
        <td>${lastName}</td>
        <td>${email}</td>
        <td><p class="delete-btn">წაშლა</p></td>
    `;

    row.querySelector('.delete-btn').addEventListener('click', function() {
        table.deleteRow(row.rowIndex - 1);
    });
});