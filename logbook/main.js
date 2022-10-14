/* JAVASCRIPT DOM */

var selectedRow = null;
var count = null;

/* Open and Close Form */
function toggle() {
    var x = document.getElementById("input-form");

    if(x.style.display == 'block') {
        x.style.display = 'none';
        document.getElementById("entry").innerHTML = 'Add an Entry';
    } else {
        x.style.display = 'block';
        document.getElementById("entry").innerHTML = 'Close Form';
    }
}

/* Receive and store input data */
function onFormSubmit() {
    var formData = readFormData();
    if(selectedRow == null)
        insertNewEntry(formData);
    else
        updateEntry(formData);

    resetForm();
}

function readFormData() {
    var formData = {};
    formData["lastName"] = document.getElementById("lastName").value;
    formData["firstName"] = document.getElementById("firstName").value;
    formData["date"] = document.getElementById("date").value;
    formData["time"] = document.getElementById("time").value;
    formData["actions"] = document.getElementById("actions").value;

    return formData;
}

/* To Display */
function insertNewEntry(data) {

    var table = document.getElementById("list").getElementsByTagName('tbody')[0];
    var newEntry = table.insertRow(table.length);
    cell1 = newEntry.insertCell(0);
    cell1.innerHTML = data.lastName;
    cell2 = newEntry.insertCell(1);
    cell2.innerHTML = data.firstName;
    cell3 = newEntry.insertCell(2);
    cell3.innerHTML = data.date;
    cell4 = newEntry.insertCell(3);
    cell4.innerHTML = data.time;
    cell5 = newEntry.insertCell(4);
    cell5.innerHTML = data.actions;
    cell6 = newEntry.insertCell(5);
    cell6.innerHTML = `<a onClick="onEdit(this)"><button>Edit</button></a>
                    <a onClick="onDelete(this)"><button>Delete</button></a>`;

    var a = document.getElementById("list");
    count = a.rows.length;

    document.getElementById("count").innerHTML = "Count: " + (count - 1);
    
}

function resetForm() {
    document.getElementById("lastName").value = "";
    document.getElementById("firstName").value = "";
    document.getElementById("date").value = "";
    document.getElementById("time").value = "";
    document.getElementById("actions").value = "";
    selectedRow = null;
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("lastName").value = selectedRow.cells[0].innerHTML;
    document.getElementById("firstName").value = selectedRow.cells[1].innerHTML;
    document.getElementById("date").value = selectedRow.cells[2].innerHTML;
    document.getElementById("time").value = selectedRow.cells[3].innerHTML;
    document.getElementById("actions").value = selectedRow.cells[4].innerHTML;
}

function updateEntry(formData) {
    selectedRow.cells[0].innerHTML = formData.lastName;
    selectedRow.cells[1].innerHTML = formData.firstName;
    selectedRow.cells[2].innerHTML = formData.date;
    selectedRow.cells[3].innerHTML = formData.time;
    selectedRow.cells[4].innerHTML = formData.actions;
}

function onDelete(td) {
    if(confirm('Are you sure you want to delete this entry?')) {
        row = td.parentElement.parentElement;
        document.getElementById("list").deleteRow(row.rowIndex);
        count = (count - 1)-1;
        if(count == 0 || count < 0) {
            document.getElementById("count").innerHTML = "";
        } else {
            document.getElementById("count").innerHTML = "Count: " + count;
        }
        resetForm();
    }
}


