const inputEmail = document.getElementById("email-input");
const submitBtn = document.getElementById("submit-btn");
const returnMessage = document.getElementById("return-message");

submitBtn.addEventListener("click", () => {
    if(inputEmail.value === ""){
        returnMessage.innerText = "This email is invalid. Make sure it's written like example@email.com";
       returnMessage.style.color= "red";
       returnMessage.style.display="block";
    }else if(inputEmail.value !== `${inputEmail} + @gmail.com`){
        returnMessage.innerText = "This email is invalid. Make sure it's written like example@email.com";
        returnMessage.style.color= "red";
        returnMessage.style.display="block";
    }else if(inputEmail.value.length < 9){
        returnMessage.innerText = "This email is invalid. Make sure it's written like example@email.com";
        returnMessage.style.color= "red";
        returnMessage.style.display="block";
    }else if(inputEmail.value === `${inputEmail} + @gmail.com`){
        
    }else if(inputEmail.value < 12){
        returnMessage.innerText = "This email is invalid. Make sure it's written like example@email.com";
        returnMessage.style.color= "red";
        returnMessage.style.display="block";
    }else if(inputEmail > 13){
        returnMessage.innerText = "This email is invalid. Make sure it's written like example@email.com";
        returnMessage.style.color= "red";
        returnMessage.style.display="block";
    }
});
