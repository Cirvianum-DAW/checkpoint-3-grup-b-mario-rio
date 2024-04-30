const productSelectElement = document.getElementById('product');
const quantityInputElement = document.getElementById('quantity');
const priceInputElement = document.getElementById('price');
const productsContainerElement = document.getElementById('products-container');
const addProductButtonElement = document.getElementById('add-product');

// Iniciem la llista de productes seleccionats
const selectedProducts = [];

// Array dels productes
const products = [
  { category: "Electrònica", price: 499.99, name: "Telèfon Intel·ligent" },
  { category: "Electrònica", price: 799.99, name: "Portàtil" },
  { category: "Electrònica", price: 299.99, name: "Auriculars sense fils" },
  { category: "Electrònica", price: 199.99, name: "Televisor Intel·ligent" },
  { category: "Electrònica", price: 149.99, name: "Relotge Intel·ligent" },
  { category: "Llar", price: 249.99, name: "Rentadora" },
  { category: "Llar", price: 149.99, name: "Assecadora" },
  { category: "Llar", price: 99.99, name: "Cafetera" },
  { category: "Llar", price: 79.99, name: "Torradora" },
  { category: "Llar", price: 199.99, name: "Aspiradora" },
];

// Afegir els productes dinàmicament al select
products.forEach((product) => {
  const option = document.createElement('option'); 

  // Assignació de valors
  option.value = product.name;
  option.textContent = product.name;
  productSelectElement.appendChild(option); 
});

// Actualitzar el preu i la quantitat quan es canvia el producte seleccionat
productSelectElement.addEventListener('change', () => {
  const selectedProduct = products.find((p) => p.name === productSelectElement.value); // Busquem el producte seleccionat
  if (selectedProduct) {
    priceInputElement.value = selectedProduct.price.toFixed(2);
    quantityInputElement.value = '1'; // Restablir la quantitat a 1
  } else {
    priceInputElement.value = ''; // Esborrar el preu si no hi ha cap producte seleccionat
    quantityInputElement.value = ''; // Esborrar la quantitat si no hi ha cap producte seleccionat
  }
});

// Funció per afegir un producte a la llista de productes seleccionats
function addProduct() {
  const selectedProduct = products.find((p) => p.name === productSelectElement.value);
  const quantity = parseInt(quantityInputElement.value);
  // Si el producte i la quantitat són vàlids, fem el calcul
  if (selectedProduct && quantity > 0) { 
    const totalPrice = selectedProduct.price * quantity; // Clccul del preu total
    selectedProducts.push({ // Pushejem el producte a la llista de productes seleccionats
      name: selectedProduct.name,
      quantity,
      totalPrice: totalPrice.toFixed(2), // Arrodonim a 2 decimals
    });

    updateProductsList();
    productSelectElement.value = ''; // Restablir el select del producte
    quantityInputElement.value = '1'; // Restablir la quantitat a 1
    priceInputElement.value = ''; // Esborrar el preu
  }
}

// Funció per actualitzar la llista de productes seleccionats mostrada a sota del formulari
function updateProductsList() {
  productsContainerElement.innerHTML = ''; // Esborrar el contingut anterior de la llista de productes
  selectedProducts.forEach((product, index) => { // Recorrem els productes seleccionats
    const productElement = document.createElement('div'); // Crear un nou element per al producte
    
    // Crear la estructura HTML per mostrar el producte
    productElement.innerHTML = `
      <div class="flex justify-between">
        <span>${product.name}</span>
        <span>${product.quantity} x ${product.totalPrice} €</span>
      </div>
    `;
    productsContainerElement.appendChild(productElement);
  });
}

addProductButtonElement.addEventListener('click', addProduct);