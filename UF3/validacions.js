// Selecció dels elements del formulari
const nameInput = document.querySelector('input[name="name"]');
const surnameInput = document.querySelector('input[name="surname"]');
const emailInput = document.querySelector('input[name="email"]');
const genderSelect = document.getElementById('gender');
const ageInput = document.getElementById('age');
const messageInput = document.getElementById('message');
const productSelect = document.getElementById('product');
const quantityInput = document.getElementById('quantity');
const submitButton = document.querySelector('button[type="submit"]');
const form = document.querySelector('form');

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
    alert("Has de ser major d'edat per realitzar la comanda.");
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

// Validació del Producte Seleccionat
function validateProduct() {
  removeExistingError(productSelect);
  const selectedProduct = productSelect.value;
  if (selectedProduct === '') {
    alert('Selecciona un producte vàlid.');
    return false;
  }
  return true;
}

// Validació de la Quantitat
function validateQuantity() {
  removeExistingError(quantityInput);
  const quantity = parseInt(quantityInput.value);
  if (isNaN(quantity) || quantity < 1 || quantity > 10) {
    alert('La quantitat ha de ser un nombre enter entre 1 i 10.');
    return false;
  }
  return true;
}

// Validació Final del Formulari
function validateForm(event) {
  event.preventDefault();
  const isProductValid = validateProduct();
  const isQuantityValid = validateQuantity();
  if (isProductValid && isQuantityValid && selectedProducts.length > 0) {
    const totalAmount = selectedProducts.reduce((total, product) => total + parseFloat(product.totalPrice), 0);
    alert(`Comanda realitzada correctament! Import total: ${totalAmount.toFixed(2)} €`);
    form.reset();
    selectedProducts.length = 0;
    updateProductsList();
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
messageInput.addEventListener('input', validateMessage);
messageInput.addEventListener('blur', validateMessage);
productSelect.addEventListener('input', validateProduct);
productSelect.addEventListener('blur', validateProduct);
quantityInput.addEventListener('input', validateQuantity);

// Afegir l'esdeveniment de submissió del formulari
form.addEventListener('submit', validateForm);