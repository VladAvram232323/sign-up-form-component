const form = document.querySelector(".free-trial");
const firstName = document.querySelector("#first");
const lastName = document.querySelector("#last");
const email = document.querySelector("#email");
const password = document.querySelector("#password");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const firstError = document.querySelector(".first-error");
  const lastError = document.querySelector(".last-error");
  const emailError = document.querySelector(".email-error");
  const passwordError = document.querySelector(".pass-error");

  let emailValidate =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  if (firstName.value === "" || firstName.value == null) {
    firstName.classList.add("error-icon");
    firstName.style.border = "2px solid red";
    firstError.style.display = "block";
  } else {
    firstName.classList.remove("error-icon");
    firstName.style.border = "1px solid var(--grayish-blue)";
    firstError.style.display = "none";
  }

  if (lastName.value === "" || lastName.value == null) {
    lastName.classList.add("error-icon");
    lastName.style.border = "2px solid red";
    lastError.style.display = "block";
  } else {
    lastName.classList.remove("error-icon");
    lastName.style.border = "1px solid var(--grayish-blue)";
    lastError.style.display = "none";
  }

  if (!email.value.match(emailValidate)) {
    email.classList.add("error-icon");
    email.style.border = "2px solid red";
    emailError.style.display = "block";
    email.placeholder = "email@example.com";
  } else {
    email.classList.remove("error-icon");
    email.style.border = "1px solid var(--grayish-blue)";
    emailError.style.display = "none";
  }

  if (password.value === "" || password.value == null) {
    password.classList.add("error-icon");
    password.style.border = "2px solid red";
    passwordError.style.display = "block";
  } else {
    password.classList.remove("error-icon");
    password.style.border = "1px solid var(--grayish-blue)";
    passwordError.style.display = "none";
  }
});
