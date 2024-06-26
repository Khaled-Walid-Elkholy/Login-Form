let password = document.getElementById("password");

function changeBorderColorEmail(){
    // let email = document.getElementById("email").style.borderBlockEndWidth="blue";
    let email = document.getElementById("email").style.borderBottomColor="red";
    // let msgEmail= document.getElementById("msgEmail").innerHTML ="You must provide your username."
    let msgEmail= document.getElementById("msgEmail").style.display="block";
 
}
function changeBorderColorPassword(){
    let password = document.getElementById("password").style.borderBottomColor="red";
    // let msgPass= document.getElementById("msgPass").innerHTML ="You must provide your password."
    let msgPass= document.getElementById("msgPass").style.display="block";

 }

// changeBorderColor();
