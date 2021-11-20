

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



function calc_avg(){
    mark1 = Number(document.getElementById('course1').value)
    hour1 = Number(document.getElementById('hours1').value)
    mark2 = Number(document.getElementById('course2').value)
    hour2 = Number(document.getElementById('hours2').value)
    mark3 = Number(document.getElementById('course3').value)
    hour3 = Number(document.getElementById('hours3').value)
    mark4 = Number(document.getElementById('course4').value)
    hour4 = Number(document.getElementById('hours4').value)
    mark5 = Number(document.getElementById('course5').value)
    hour5 = Number(document.getElementById('hours5').value)

    allHours = hour1 + hour2 + hour3 + hour4 + hour5
    mark = (mark1*hour1) + (mark2*hour2) + (mark3*hour3) + (mark4*hour4) + (mark5*hour5)
    result = mark / allHours

      

    if( mark1, mark2, mark3, mark4, mark5 > -1  && mark1, mark2, mark3, mark4, mark5 <= 100 && mark1, mark2, mark3, mark4, mark5 != ""){
        document.getElementById('result').innerHTML = 'Your Result : ' + result + '%'
        document.getElementById('result').style.display = 'inline'
        document.getElementById('result').style.border = "1px solid #000"
    }else{
        document.getElementById('result').innerHTML = 'Please Enter Value In Range!'
        document.getElementById('result').style.display = 'inline'
        document.getElementById('result').style.border = "1.5px solid red"
        document.getElementById('result').style.color = "red"
    }
    
}

function clear_result(){
    document.getElementById('result').style.display = 'none'
}