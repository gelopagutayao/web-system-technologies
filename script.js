function addUser() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var role = document.getElementById('role').value;

    var table = document.getElementById('userTable').getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.rows.length);
    newRow.innerHTML = `<td class="p-3 px-5">${table.rows.length}</td>
                        <td class="flex-shrink-0 w-10 h-10 p-3 px-5"><img class="w-10 h-10 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80" alt=""></td>
                        <td class="p-3 px-5">${name}</td>
                        <td class="p-3 px-5">${email}</td>
                        <td class="p-3 px-5">${role}</td>
                        <td class="p-3 px-5 flex"><button type="button" class="mr-3 text-sm bg-white-500 hover:bg-blue-700 text-white py-1 px-2 rounded  focus:shadow-outline bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"><i class="fa-solid fa-pen-to-square"></i></button><button type="button" class="text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline" onclick="deleteUser(this)"><i class="fa-solid fa-trash"></i></button></td>`;
}

function deleteUser(row) {
    var i = row.parentNode.parentNode.rowIndex;
    document.getElementById('userTable').deleteRow(i);
}

function Edit(row) {
    var i = row.parentNode.parentNode.rowIndex;
    var table = document.getElementById('userTable');
    var cells = table.rows[i].cells;

    for (var j = 2; j < cells.length - 1; j++) {
        cells[j].setAttribute('contenteditable', 'true');
    }
}
