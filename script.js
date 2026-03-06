var nameinput=document.getElementById("name")
var emailinput=document.getElementById("email")
var passwordinput=document.getElementById("password")

var nameerror=document.getElementById("nameerror")
var emailerror=document.getElementById("emailerror")
var passworderror=document.getElementById("passworderror")

var submitbtn=document.getElementById("submitbtn")

nameinput.addEventListener("input",validatename)
emailinput.addEventListener("input",validateemail)
passwordinput.addEventListener("input",validatepassword)



function validatename(){
    if(nameinput.value ==="")
    {
        nameerror.textContent="Name cannot be empty";
        nameinput.style.border="solid red 1px"
    }
    else
    {
        nameerror.textContent="" ;
        nameinput.style.border="solid green 1px"
    }    
    checkform()
}

function validateemail(){
    if(emailinput.value.includes("@") && emailinput.value.includes("."))
    {
        emailerror.textContent=""
         emailinput.style.border="solid green 1px"
    }    
    else
    {
        emailerror.textContent="Enter a valid Email"
        emailinput.style.border="solid red 1px"
    }    
    checkform()
}

function validatepassword(){
    if(passwordinput.value.length < 6)
    {
        passworderror.textContent="Password must be atleast 6 characters"
        passwordinput.style.border="solid red 1px"
    }    
    else
    {
        passworderror.textContent=""
        passwordinput.style.border="solid green 1px"
    }   
    checkform() 
}

function checkform(){
    if(
        nameinput.value !== "" &&
        emailinput.value.includes("@")&&
        emailinput.value.includes(".")&&
        passwordinput.value.length >= 6 
    )
    {
        submitbtn.disabled = false
    }
    else{
        submitbtn.disabled = true
    }

    
}

