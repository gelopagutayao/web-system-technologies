function showAlert() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var role = document.getElementById('role').value;

    if (name === "") {
        alert("Please Input Name");
        return false;
    }
    if (email === ""){
        alert("Please Input Email")
        return false;
    }

    if (role === ""){
        alert("Please Choose your Role")
        return false;
    }

    return true;
}

const createAccButton = document.getElementById('accbtn');

createAccButton.addEventListener('click', appendValues);

function appendValues() {
    if (!showAlert()) {
        return; 
    }
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
                        <td class="p-3 px-5 flex"><button type="button" class="mr-3 text-sm bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" onclick="editRow(this)"><i class="fa-solid fa-pen-to-square"></i></button><button type="button" class="text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline" onclick="deleteRow(this)"><i class="fa-solid fa-trash"></i></button></td>`;

    document.getElementById('name').value = "";
    document.getElementById('email').value = "";
    document.getElementById('role').value = "";
}

function deleteRow(row) {
    var i = row.parentNode.parentNode.rowIndex;
    document.getElementById('userTable').deleteRow(i);
    alert("Are you sure you want to delete?");
}

function editRow(row) {
    alert("Edit Current Display In Left Table")
    var createaccount = "Edit Current Account"
    var i = row.parentNode.parentNode.rowIndex;
    var table = document.getElementById('userTable');
    var name = table.rows[i].cells[2].innerHTML;
    var email = table.rows[i].cells[3].innerHTML;
    var role = table.rows[i].cells[4].innerHTML;

    document.getElementById('name').value = name;
    document.getElementById('email').value = email;
    document.getElementById('role').value = role;
 
    table.deleteRow(i);
}
