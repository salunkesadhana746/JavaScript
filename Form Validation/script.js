const inputName = document.getElementById("input-name"); // we fetch the input-name box by id and store into variable.
const inputEmail = document.getElementById("input-email"); // we fetch the input-email box by id and store into variable.
const inputPhone = document.getElementById("input-phone"); // we fetch the input-phone box by id and store into variable.
const inputAge = document.getElementById("input-age"); // we fetch the input-age box by id and store into variable.

const submitBtn = document.getElementById("submit-btn"); // we fetch the submit button by id and store into variable.

const outputName = document.getElementById("output-name"); // we fetch the output-name box by id and store into variable.
const outputEmail = document.getElementById("output-email"); // we fetch the output-email box by id and store into variable.
const outputPhone = document.getElementById("output-phone"); // we fetch the output-phone box by id and store into variable.
const outputAge = document.getElementById("output-age"); // we fetch the output-age box by id and store into variable.

//process - function

const handleSubmit = () => {
  //function create kiya hai jo submit button ko handle karta hai

  outputName.textContent = ""; // we clear previous entry on new submit click on name output box.
  outputEmail.textContent = ""; // we clear previous entry on new submit click on email output box.
  outputPhone.textContent = ""; // we clear previous entry on new submit click on phone output box.
  outputAge.textContent = "";  // we clear previous entry on new submit click on age output box.


   // we fetch data from textfield/input box and store into new variable.
  const name = inputName.value;
  const email = inputEmail.value;
  const phone = inputPhone.value;
  const age = inputAge.value;

   //check phone number by if condition
  if (phone.length != 10) {
    alert("Enter valid phone number !");
  }

  //check age number by if condition, age must less than 100 and greater than 0.
  if (age > 100 || age <= 0) {
    alert("Enter valid age !");
    return;
  }

   //we print a output
  outputName.textContent = name;
  outputEmail.textContent = email;
  outputPhone.textContent = phone;
  outputAge.textContent = age;
};

//we create click event, and connect control submit function button.
submitBtn.addEventListener("click", handleSubmit);
