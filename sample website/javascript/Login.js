function validation() {
    if(document.FormFill.Email.value==""){
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
    // Open the popup if all details are correct
    openPopup();

    // Return false to prevent form submission
    return false;
}

function openPopup() {
    var popup = document.getElementById("popup");
    popup.classList.add("open-slide");
}

// Function to close the popup
function CloseSlide() {
    var popup = document.getElementById("popup");
    popup.classList.remove("open-slide");
}