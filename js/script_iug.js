

var name_user = document.cookie.split("; ")
for(var i = 0; i < name_user.length; i++){
    if(name_user[i].split("=")[0] == "username"){
        document.getElementById("block_name").innerHTML  += name_user[i].split("=")[1]+'.' 
    }
}

function signOut(){
    var date = new Date();
    exp_date = date.getTime() - 10 * 24 * 60 * 60 * 1000;
    date.setTime(exp_date);
    document.cookie = "username=" + ";expires=" + date
    document.cookie = "permetion=" + ";expires=" + date
    window.location.href = "login.html"
}





// * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *


id = localStorage.length;
userForm.id.value = id;
function logout() {
    var date = new Date();
    exp_date = date.getTime() - 1 * 24 * 60 * 60 * 1000;
    date.setTime(exp_date);
    document.cookie = "username="+ ";expires=" + date;
    document.cookie = "permetion=" +";expires=" + date;
    location.href ="login.html";
}

function delete_all(){
    localStorage.clear();
    read_users();
    id = localStorage.length;
    userForm.id.value = id;
}


function delete_user(obj){
    table_row = obj.parentElement.parentElement;
    id = table_row.children[0].innerHTML;
    localStorage.removeItem(id);
    read_users();
}

function update_user(){
    var id = userForm.id.value;
    var username = userForm.username.value;
    var email = userForm.email.value;
    var password = userForm.password.value;

    user = {
        id: id,
        username: username,
        email: email,
        password: password
    }
    localStorage.setItem(id, JSON.stringify(user));
    read_users();
}


function edit_user(obj){
    table_row = obj.parentElement.parentElement;
    children0 = table_row.children[0].innerHTML;
    children1 = table_row.children[1].innerHTML;
    children2 = table_row.children[2].innerHTML;
    children3 = table_row.children[3].innerHTML;
    userForm.id.value = children0;
    userForm.username.value = children1;
    userForm.email.value = children2;
    userForm.password.value = children3;
}

function create_user() {
    event.preventDefault();
    var id = userForm.id.value;
    var username = userForm.username.value;
    var email = userForm.email.value;
    var password = userForm.password.value;

    user = {
        id: id,
        username: username,
        email: email,
        password: password
    }
    localStorage.setItem(id, JSON.stringify(user));
    id++;
    userForm.id.value = id;
    var tbody = document.getElementById("user_data");
    var row1 = tbody.insertRow(-1);

    var cell0 = row1.insertCell(0);
    var cell1 = row1.insertCell(1);
    var cell2 = row1.insertCell(2);
    var cell3 = row1.insertCell(3);
    var cell4 = row1.insertCell(4);
    var cell5 = row1.insertCell(5);

    cell0.innerHTML = id;
    cell1.innerHTML = username;
    cell2.innerHTML = email;
    cell3.innerHTML = password;
    cell4.innerHTML = '<span onclick="edit_user(this)" class="abc"><i class="fas fa-edit"></i></span>';
    cell5.innerHTML = '<span onclick="delete_user(this)" class="abc"><i class="fas fa-trash"></i></span>';
}


function read_users() {
    var tbody = document.getElementById("user_data");
    tbody.innerHTML = null;

    for (i = 0; i < localStorage.length; i++) {
        var row1 = tbody.insertRow(-1);
        var cell0 = row1.insertCell(0);
        var cell1 = row1.insertCell(1);
        var cell2 = row1.insertCell(2);
        var cell3 = row1.insertCell(3);
        var cell4 = row1.insertCell(4);
        var cell5 = row1.insertCell(5);
        
        user_data = localStorage.getItem(localStorage.key(i));
        cell0.innerHTML = JSON.parse(user_data).id;
        cell1.innerHTML = JSON.parse(user_data).username;
        cell2.innerHTML = JSON.parse(user_data).email;
        cell3.innerHTML = JSON.parse(user_data).password;
    cell4.innerHTML = '<span onclick="edit_user(this)" class="abc"><i class="fas fa-edit"></i></span>';
    cell5.innerHTML = '<span onclick="delete_user(this)" class="abc"><i class="fas fa-trash"></i></span>';
    }

}