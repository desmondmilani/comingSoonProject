//function to validate email

function validateEmail() {
    let userEmail = document.querySelector("#email").value;
    let displayMessage = document.querySelector("#message");
    let form = document.querySelector("#form");

    let errorM = document.querySelector("#error");

    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(userEmail)) {
        displayMessage.style.color = "green";
        displayMessage.innerHTML = "Email saved to database";
        form.style.border = "1px solid green";
        errorM.style.visibility = "hidden";
    } else {
        displayMessage.style.color = "red";
        displayMessage.innerHTML = "Enter valid email";
        form.style.border = "1px solid red";
        errorM.style.visibility = "visible";
    }
}