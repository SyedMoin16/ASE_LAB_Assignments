
/**
 * Created by syedm on 28-01-2017.
 */


function register() {

window.location="register.html";

}


function home() {


    var a=localStorage.getItem("usr3");
    var b=localStorage.getItem("usr4");



        if ((a === document.getElementById("userName").value) && (b === document.getElementById("passWord").value)) {

            window.location = "home.html";
        }

     else{
        alert("Please enter valid inputs");
    }

}

function signup() {

    var a=  document.getElementById("name").value;
    var b=  document.getElementById("email").value;
    var c= document.getElementById("username").value;
    var d=   document.getElementById("password").value;
    var e=   document.getElementById("confirm").value;

if(a==='' || a=== null || b==='' || b===null || c==='' || c===null || d==='' || d===null || e==='' || e===null)
{
    alert("Please fill all details");
}

else if(d!==e){
    alert("Passwords doesn't match");

}
else
    {

        localStorage.setItem("usr1", (document.getElementById("name")).value);
        localStorage.setItem("usr2", document.getElementById("email").value);
        localStorage.setItem("usr3", document.getElementById("username").value);
        localStorage.setItem("usr4", document.getElementById("password").value);
        localStorage.setItem("usr4", document.getElementById("confirm").value);


        window.location = "login.html";

        alert("Registration Successful");

    }


}

function goToLogin() {
    window.location="login.html";

}