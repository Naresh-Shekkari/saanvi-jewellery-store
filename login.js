/* Admin Credentials */

const adminUsername = "admin";

const adminPassword = "SaanviGouthami@0225";

/* Login Function */

function login(){

    let username =
    document.getElementById("username").value;

    let password =
    document.getElementById("password").value;

    let error =
    document.getElementById("errorText");

    if(
        username === adminUsername
        &&
        password === adminPassword
    ){

        localStorage.setItem(
            "adminLoggedIn",
            "true"
        );

        window.location.href =
        "admin.html";

    }

    else{

        error.innerText =
        "Invalid Username or Password";

    }

}