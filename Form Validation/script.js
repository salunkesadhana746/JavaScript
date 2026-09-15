const inputName = document.getElementById("input-name");
const inputEmail = document.getElementById("input-email");
const inputPhone = document.getElementById("input-phone");
const inputAge = document.getElementById("input-age");

const submitBtn = document.getElementById("submit-btn");

const outputName = document.getElementById("output-name");
const outputEmail = document.getElementById("output-email");
const outputPhone = document.getElementById("output-phone");
const outputAge = document.getElementById("output-age");

//process - function

const handleSubmit = () => {
    const name = inputName.value;
    const email = inputEmail.value;
    const phone = inputPhone.value;
    const age = inputAge.value;

    if(phone.length != 10){
        alert("Enter valid phone number !");
    }
    
    outputName.textContent = name;
    outputEmail.textContent = email;
    outputPhone.textContent = phone;
    outputAge.textContent = age;
}

submitBtn.addEventListener("click", handleSubmit);
