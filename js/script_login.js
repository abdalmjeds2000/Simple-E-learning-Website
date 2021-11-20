
var users = [
    {username:"Omar Khalid", password:"1234567", permeation:"iug"},
    {username:"Ahmed Mo", password:"2345678", permeation:"std"},
    {username:"AbdAlmjed Skaik", password:"0123456", permeation:"std"},
    {username:"Hasan Skaik", password:"1152004", permeation:"iug"}  
]

var error = document.getElementById("msg_error")

function check_users(name, pass, users){
    for(i in users){
        var user = users[i]
        if (name == user.username.replace(" ", "_") + "@" + user.permeation && pass == user.password){
            return user
        }if(name == user.username.replace(" ", "_") + "@" + user.permeation && pass != user.password){
            error.innerHTML = "Password incorrect"
            error.style.border = "rgb(255, 10, 10) 2px solid"
            error.style.fontSize = "1.0em"
            document.form_login.user_pass.style.border = "rgb(255, 10, 10) 1px solid"
            document.form_login.user_name.style.border = "none"
        }if(pass == ""){
            error.innerHTML = "Password Required"
            error.style.fontSize = "1.0em"
            document.form_login.user_pass.style.border = "rgb(255, 10, 10) 1px solid"
            document.form_login.user_name.style.border = "none"
        }if(name.length < 8 ){
            error.innerHTML = "Username pattern should be as: <u> FirstName_LastName@permeation <u/>"
            error.style.border = "rgb(255, 10, 10) 2px solid"
            error.style.fontSize = "0.8em"
            document.form_login.user_name.style.border = "rgb(255, 10, 10) 1px solid"
            document.form_login.user_pass.style.border = "none"
        }if(name == "" && pass == ""){
            error.innerHTML = "Username and Password Required!"
            error.style.border = "rgb(255, 10, 10) 2px solid"
            error.style.fontSize = "1.0em"
            document.form_login.user_name.style.border = "rgb(255, 10, 10) 1px solid"
            document.form_login.user_pass.style.border = "rgb(255, 10, 10) 1px solid"
        }
    }
    return false
}


function login(){

    var user_name = document.form_login.user_name.value
    var user_pass = document.form_login.user_pass.value
    var error = document.getElementById("msg_error")
               
    var check_val = check_users(user_name, user_pass, users)

    if(check_val != false){
        var date = new Date();
        exp_date = date.getTime() + 10 * 24 * 60 * 60 * 1000;
        date.setTime(exp_date);
        document.cookie = "username=" + check_val.username + ";expires=" + date
        document.cookie = "permetion=" + check_val.permeation + ";expires=" + date

        if(check_val.permeation == "std"){
            window.location.href = "std_page.html"
        }else if(check_val.permeation == "iug"){
            window.location.href = "iug_page.html"
        }
    }
}

function to_logup(){
    window.location.href = ("logup.html");
}








/*
    for(var i=0; i<=users.length-1; i++){
        if (user_name == users[i].username.replace(" ", "_")+"@"+users[i].permeation){
            if(user_pass == users[i].password){
                localStorage.setItem(0, user_name)
                document.form_login.user_name.style.border = "none"
                document.form_login.user_pass.style.border = "none"
                if(name.split('@')[1] == 'std'){
                    window.location.href = "std_page.html"
                }else{
                    window.location.href = "std_page.html"
                }
                
            }if(user_pass != users[i].password){
                error.innerHTML = "Password incorrect"
                error.style.border = "rgb(255, 10, 10) 2px solid"
                error.style.fontSize = "1.0em"
                document.form_login.user_pass.style.border = "rgb(255, 10, 10) 1px solid"
                document.form_login.user_name.style.border = "none"
            }if(user_pass == ""){
                error.innerHTML = "Password Required"
                error.style.fontSize = "1.0em"
                document.form_login.user_pass.style.border = "rgb(255, 10, 10) 1px solid"
                document.form_login.user_name.style.border = "none"
            }
            break;
        }if(user_name == "" && user_pass == ""){
            error.innerHTML = "Username and Password Required!"
            error.style.border = "rgb(255, 10, 10) 2px solid"
            error.style.fontSize = "1.0em"
            document.form_login.user_name.style.border = "rgb(255, 10, 10) 1px solid"
            document.form_login.user_pass.style.border = "rgb(255, 10, 10) 1px solid"

        }if(user_name[-4] != "@" && user_name != ""){
            error.innerHTML = "Username pattern should be as: <u> FirstName_LastName@permeation <u/>"
            error.style.border = "rgb(255, 10, 10) 2px solid"
            error.style.fontSize = "0.8em"
            document.form_login.user_name.style.border = "rgb(255, 10, 10) 1px solid"
            document.form_login.user_pass.style.border = "none"
        }
    }


*/