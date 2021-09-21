

let table = document.getElementById("table");
loadUsers();


async function loadUsers() {
    await fetch('http://localhost:8090/mintic/tiendagenerica/users')
        .then(response => response.json())
        .then(rsp => { loadTable(rsp, table) });
}

function loadTable(data, table) {
    if (!document.getElementsByTagName) return;
    for (let element of data) {
        let row = table.insertRow();
        for (key in element) {
            let cell = row.insertCell();
            let text = document.createTextNode(element[key] == null ? "" : key == "password" ? coverPassword(element[key].length) : element[key]);
            cell.appendChild(text);
        }
    }
}

function coverPassword(number) {
    let text = "";
    while (number > 0) {
        text += "*";
        number--;
    }
    return text;
}