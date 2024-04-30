// Selecció dels elements del formulari
const nameInput = document.querySelector('input[name="name"]');
const surnameInput = document.querySelector('input[name="surname"]');
const emailInput = document.querySelector('input[name="email"]');
const genderSelect = document.getElementById('gender');
const ageInput = document.getElementById('age');
const messageInput = document.getElementById('message');

// Funció per eliminar missatges d'error existents
function removeExistingError(input) {
  const existingError = input.nextElementSibling;
  if (existingError && existingError.classList.contains('error')) {
    existingError.remove();
  }
}

// Funció per crear i mostrar missatges d'error
function displayError(input, message) {
  const error = document.createElement('div');
  error.textContent = message;
  error.classList.add('error');
  input.insertAdjacentElement('afterend', error);
}

// Validació del Nom
function validateName() {
  removeExistingError(nameInput);
  const nameValue = nameInput.value.trim();
  const nameRegex = /^[a-zA-Z]{3,50}$/;
  if (!nameRegex.test(nameValue)) {
    displayError(nameInput, "El nom i cognom han de tenir com a mínim 3 caràcters i menys de 50 i NO poden contenir números");
  }
}

// Validació del Cognom
function validateSurname() {
  removeExistingError(surnameInput);
  const surnameValue = surnameInput.value.trim();
  const surnameRegex = /^[a-zA-Z]{3,50}$/;
  if (!surnameRegex.test(surnameValue)) {
    displayError(surnameInput, "El nom i cognom han de tenir com a mínim 3 caràcters i menys de 50 i NO poden contenir números");
  }
}

// Validació de l'Adreça de Correu Electrònic
function validateEmail() {
  removeExistingError(emailInput);
  const emailValue = emailInput.value.trim();
  const emailRegex = /^[^@]+@[^@]+\.[^@]+$/;
  if (!emailRegex.test(emailValue)) {
    displayError(emailInput, "L'adreça de correu electrònic no és vàlida.");
  }
}

// Validació del Gènere
function validateGender() {
  removeExistingError(genderSelect);
  const selectedGender = genderSelect.value;
  const validGenders = ['male', 'female', 'other'];
  if (!validGenders.includes(selectedGender)) {
    displayError(genderSelect, "Selecciona un gènere vàlid.");
  }
}

// Validació de l'Edat
function validateAge() {
  removeExistingError(ageInput);
  const age = parseInt(ageInput.value);
  if (age < 18) {
    displayError(ageInput, "Has de ser major d'edat per realitzar la comanda.");
  }
}

// Validació del Camp de Missatge
function validateMessage() {
  removeExistingError(messageInput);
  const messageValue = messageInput.value.trim();
  if (messageValue.length < 10 || messageValue.length > 200) {
    displayError(messageInput, 'El missatge ha de tenir entre 10 i 200 caràcters.');
  }
}

// Afegir els esdeveniments per a les validacions
nameInput.addEventListener('input', validateName);
nameInput.addEventListener('blur', validateName);
surnameInput.addEventListener('input', validateSurname);
surnameInput.addEventListener('blur', validateSurname);
emailInput.addEventListener('input', validateEmail);
emailInput.addEventListener('blur', validateEmail);
genderSelect.addEventListener('change', validateGender);
ageInput.addEventListener('input', validateAge);
ageInput.addEventListener('blur', validateAge);
messageInput.addEventListener('input', validateMessage);
messageInput.addEventListener('blur', validateMessage);