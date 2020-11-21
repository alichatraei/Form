//Variables -- get elements tags
const form = document.querySelector("#signUpForm"),
  signUpBtn = document.querySelector("#signUp"),
  resetFormBtn = document.querySelector("#resetBtn"),
  email = document.querySelector("#email"),
  password = document.querySelector("#password");

//Event Listeners
eventListeners();
function eventListeners() {
  //signUp form eventListeners
  form.addEventListener("submit", signIn);
  //at first, disable signUp Button event listeners
  document.addEventListener("DOMContentLoaded", appInit);
  // Validate input elements (with blur event) -->

  email.addEventListener("blur", formValidate);
  password.addEventListener("blur", formValidate);

  // reset form event
  resetFormBtn.addEventListener("click", resetForm);
}

//functions -->
//signUp Button Function
function signIn(e) {
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
  if (this.getAttribute("id") === "email") {
    //validate num2
    inputValidate(this);
    emailValidate(this);
  }
  //validate num3
  else inputValidate(this);

  // active signUp button when validation completed
  showSignInBtn();
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

// show Signup button function
function showSignInBtn() {
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
