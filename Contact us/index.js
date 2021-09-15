let nameEl = document.getElementById("name");
let nameErrorEl = document.getElementById("nameError");
let emailEl = document.getElementById("email");
let emailErrorEl = document.getElementById("emailError");
let phoneEl = document.getElementById("number");
let phoneErrorEl = document.getElementById("phoneError");
let sendDataEl = document.getElementById("sendData")

let myData = {
    userName : "",
    userEmail : "",
    userNumber : ""
}

function validateName() {
    if (nameEl.value == "") {
        nameErrorEl.textContent = "Please enter your name with Alphabates only"
        myData.userName = ""
    }
    else {
        nameErrorEl.textContent = ""
        nameEl.style.color = "green"
        myData.userName = nameEl.value
    }
}

function validateEmail() {
    var x=email.value;
    if (x.length > 0) {
        for (let each of x) {
            if(each == "@") {
                emailErrorEl.textContent = ""
                emailEl.style.color = "green"
                myData.userEmail = emailEl.value
                break
            }else {
                emailErrorEl.textContent = "please enter valid email"
                myData.userEmail = ""
            } 
        }
    }else {
        emailErrorEl.textContent = "please enter valid email"
        myData.userEmail = ""
    }
    
}

function validateNumber() {
    let n = phoneEl.value
    if(n.length > 10) {
        phoneEl.style.color = "red"
        phoneErrorEl.textContent = "Please enter Valid Number"
        myData.userNumber = ""
    }else if (n.length == 10){
        phoneEl.style.color = "green"
        phoneErrorEl.textContent = ""
        myData.userNumber = phoneEl.value
    }
    else {
        phoneEl.style.color = "blue"
        phoneErrorEl.textContent = "Please enter Valid Number"
        myData.userNumber = ""
    }
}

function submitForm() {
    console.log(myData)
    if(myData.userName == "" && myData.userEmail == "" && myData.userNumber == "") {
        
        alert("fill the form")
    }else {
        alert("Success")
        nameEl.value = ""
        emailEl.value = ""
        phoneEl.value = ""
    }
}

nameEl.addEventListener("blur", validateName);
emailEl.addEventListener("blur", validateEmail);
phoneEl.addEventListener("keyup", validateNumber);

sendDataEl.addEventListener("submit", function(event) {
    event.preventDefault();
    validateName();
    validateEmail();
    validateNumber();
    submitForm()
})


