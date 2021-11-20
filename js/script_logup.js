function logup()  {
    var user_name = document.form_logup.user_name.value
    var user_email = document.form_logup.user_email.value
    var user_pass = document.form_logup.user_pass.value
    var user_cpass = document.form_logup.user_confirm_pass.value
    var choose = document.form_logup.choose.value
    var form = document.getElementById("form")
    var msg_error = document.getElementById("msg_error")
    //var result = {"usernasme" : user_name, "user_email" : user_email, "user_pass" : user_pass, "user_confirm_pass" : user_cpass, "choose" : choose};



    var massage = []
    if(user_name == ""){
        massage.push('Username Required')
    }
    if(user_email == ""){
        massage.push('Email Required')
    }
    if(user_pass.length <= 7){
        massage.push('Password must be greater than 7 character!')
    }
    if(user_pass.length >= 20){
        massage.push('Password must be less than 20 character!')
    }
    if(user_cpass != user_pass){
        massage.push('must be Confirm Password equal Password!')
    }
    if(massage.length > 0){
        msg_error.innerHTML = massage.join(', ')
        msg_error.style.color = "red"
        msg_error.style.border = "rgb(255, 10, 10) 2px solid"
        return false;
    } else{
        msg_error.innerHTML = "User successfully registered"
        msg_error.style.color = "rgb(37, 235, 143)"
        msg_error.style.border = "rgb(37, 235, 143) 2px solid"
        msg_error.style.fontSize = "1.1em"
        return false;
    }
}

    






function to_login(){
    window.location.href = ("login.html");
}