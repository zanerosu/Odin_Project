// Get all objects from DOM
// Create event listeners for each object

const mail_input = document.querySelector("#mail");
const mailError = document.querySelector("#mail + span.error");

mail_input.addEventListener('input', (event) => {
    if(mail_input.validity.valid){
      mailError.textContent = "";
      mailError.className = "error";
    } else{
      showMailError();
    }
} )

function showMailError(){
  if (mail_input.validity.valueMissing) {
    mailError.textContent = "You must enter an email address!";
  } else if (mail_input.validity.typeMismatch){
    mailError.textContent = "Entered value needs to be an email address!";
  } else if (mail_input.validity.tooShort){
    mailError.textContent = `Email should be at least ${mail_input.minLength} characters; You entered ${mail_input.value.length}.`;
  }
  mailError.className = "error active";
}

const country_input = document.querySelector("#country");
const countryError = document.querySelector("#country + span.error");

country_input.addEventListener('input', (event) => {
  if(country_input.validity.valid){
    countryError.textContent = "";
    countryError.className = "error";
  } else {
    showCountryError();
  }
})

function showCountryError(){
  if(country_input.validity.typeMismatch){
    countryError.textContent = "Entered value needs to be text!";
  }
  else if(country_input.validity.patternMismatch){
    countryError.textContent = "Must only contain letters A-Z!";
  }
  else if(country_input.validity.tooShort){
    countryError.textContent = "Must be larger than 3 characters!";
  }
  countryError.className = "error active";
}


const zip_input = document.querySelector("#zip");
const zipError = document.querySelector("#zip + span.error");

zip_input.addEventListener('input', (event) => {
  if(zip_input.validity.valid){
    zipError.textContent = "";
    zipError.className = "error";
  } else {
    showZipError();
  }
})

function showZipError(){
  if(zip_input.validity.typeMismatch){
    zipError.textContent = "Entered value needs to be text!";
  }
  else if(zip_input.validity.patternMismatch){
    zipError.textContent = "Must only contain numbners 0-9!";
  }
  else if(zip_input.validity.tooShort){
    zipError.textContent = "Must be 5 digits!";
  }
  zipError.className = "error active";
}


const password_input = document.querySelector("#password");
const passwordError = document.querySelector("#password + span.error");

password_input.addEventListener('input', (event) => {
  if(password_input.validity.valid){
    passwordError.textContent = "";
    passwordError.className = "error";
  } else {
    showPasswordError();
  }
})

function showPasswordError(){
  if(password_input.validity.patternMismatch){
    passwordError.textContent = "Password must be at least 8 characters, and can contain letters and numbers!";
  }
  passwordError.className = "error active";
}

const form = document.querySelector("#main-form");
const passwordConf_input = document.querySelector("#password-conf");
const passwordConfError = document.querySelector("#password-conf + span.error");

form.addEventListener('submit', (event) => {
  event.preventDefault();
  if(password_input.value != passwordConf_input.value){
    passwordConfError.textContent = "Passwords must match!";
    passwordConfError.className = "error active";
  }
  else{
    passwordConfError.className = "error"
    passwordConfError.textContent = "";
    form.resetForm();
  }
})