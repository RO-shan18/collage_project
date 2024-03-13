function validation(){
    if(document.FormFill.UserName.value ==""){
        document.getElementById("result").innerHTML = "Enter Username";
        return false;
    }
    else if(document.FormFill.UserName.value.length<6){
        document.getElementById("result").innerHTML = "Atleast six letter";
        return false;
    }
    else if(document.FormFill.Email.value==""){
        document.getElementById("result").innerHTML = "Enter your Email";
        return false;
    } 
    else if(document.FormFill.Email.value.length<6){
        document.getElementById("result").innerHTML = "Atleast six letter";
        return false;
    }
    else if(document.FormFill.Password.value==""){
        document.getElementById("result").innerHTML = "Enter your Password";
        return false;
    }
    else if(document.FormFill.Password.value.length<6){
        document.getElementById("result").innerHTML = "Password must be 6-digit";
        return false;
    }
    else if(document.FormFill.cPassword.value==""){
        document.getElementById("result").innerHTML = "Enter Confirm Password";
        return false;
    }
    else if(document.FormFill.cPassword.value != document.FormFill.Password.value){
        document.getElementById("result").innerHTML = "Password does'nt Matched";
        return false;
    }
    else if(document.FormFill.Password.value == document.FormFill.cPassword.value){
        popup.classList.add("open-slide")
        return false;
    }

}

var popup = document.getElementById("popup");
function CloseSlide(){
    popup.classList.remove("open-slide");
}