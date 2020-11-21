//Variables -- get elements tags
const form = document.querySelector("#signUpForm"),
  signUpBtn = document.querySelector("#signUp"),
  resetFormBtn = document.querySelector("#resetBtn"),
  name = document.querySelector("#name"),
  lName = document.querySelector("#lName"),
  email = document.querySelector("#email"),
  password = document.querySelector("#password"),
  rePassword = document.querySelector("#rePassword");

//Event Listeners
eventListeners();
function eventListeners() {
  //signUp form eventListeners
  form.addEventListener("submit", signUp);
  //at first, disable signUp Button event listeners
  document.addEventListener("DOMContentLoaded", appInit);
  // Validate input elements (with blur event) -->
  name.addEventListener("blur", formValidate);
  lName.addEventListener("blur", formValidate);
  email.addEventListener("blur", formValidate);
  password.addEventListener("blur", formValidate);
  rePassword.addEventListener("blur", formValidate);
  // reset form event
  resetFormBtn.addEventListener("click", resetForm);
}

//functions -->
//signUp Button Function
function signUp(e) {
  e.preventDefault();
}
//disable button at first
function appInit() {
  //when page loaded this button disable, cause we don't have any input value yet
  signUpBtn.disabled = true;
}
// Form validate function
function formValidate() {
  //form validate contain --> 1.inputs does not empty 2.check Email value 3. password & rePassword like together or not
  // we have to use if-condition,cause know which element selected
  if (this.getAttribute("id") == "name" || this.getAttribute("id") == "lName") {
    //Validate num1
    inputValidate(this);
  } else if (this.getAttribute("id") === "email") {
    //validate num2
    emailValidate(this);
  }
  //validate num3
  else passwordsValidate();

  // active signUp button when validation completed
  showSignUpBtn();
}
// input length Validate function
function inputValidate(field) {
  if (field.value.length > 0) {
    field.setAttribute("style", "border-bottom-color:green");
    // remove error class list
    let removeError = field.classList;
    removeError.forEach((err) => {
      if (err === "error") removeError.remove(err);
    });
  } else {
    field.classList = "form-control error";
    field.setAttribute("style", "border-bottom-color:red");
  }
}
// Email validate function
function emailValidate(emailField) {
  // we just say does Email input which user types have '@' or not
  if (
    emailField.value.includes("@") &&
    emailField.value.includes("gmail.com")
  ) {
    emailField.setAttribute("style", "border-bottom-color:green");
    let removeError = emailField.classList;
    removeError.forEach((err) => {
      if (err === "error") removeError.remove(err);
    });
  } else {
    emailField.setAttribute("class", "form-control error");
    emailField.setAttribute("style", "border-bottom-color:red");
  }
}
// Passwords validate function
function passwordsValidate() {
  if (password.value === rePassword.value && password.value.length > 0) {
    password.setAttribute("style", "border-bottom-color:green");
    rePassword.setAttribute("style", "border-bottom-color:green");
    let removePassword = password.classList;
    let removeRePassword = rePassword.classList;
    removePassword.forEach((err) => {
      if (err === "error") {
        removePassword.remove(err);
        removeRePassword.remove(err);
      }
    });
  } else {
    password.setAttribute("class", "form-control error");
    password.setAttribute("style", "border-bottom-color:red");
    rePassword.setAttribute("class", "form-control error");
    rePassword.setAttribute("style", "border-bottom-color:red");
  }
}
// show Signup button function
function showSignUpBtn() {
  const getErrorAttribute = document.querySelectorAll(".error");
  if (getErrorAttribute.length == 0) signUpBtn.disabled = false;
  else signUpBtn.disabled = true;
}
// Reset form Function
function resetForm(e) {
  e.preventDefault();
  form.reset();
  appInit();
}
