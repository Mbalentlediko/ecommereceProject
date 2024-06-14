// 
// Declare the variables at the top-level scope
let cart = [];
let totalPrice = 0;
let mainContainer;
let checkoutTable;

// Function to create the checkout table
function createCheckoutTable() {
  // Create the table element
  const checkoutTable = document.createElement('table');
  checkoutTable.classList.add('table', 'table-striped');

  // Create the table body
  const tbody = document.createElement('tbody');

  // Iterate through the cart items
  cart.forEach(item => {
    // Create a new row
    const row = document.createElement('tr');

    // Product
    const productCell = document.createElement('td');
    productCell.textContent = item.name;
    row.appendChild(productCell);

    // Price
    const priceCell = document.createElement('td');
    priceCell.textContent = `$${item.price.toFixed(2)}`;
    row.appendChild(priceCell);

    // Quantity
    const quantityCell = document.createElement('td');
    const quantityInput = document.createElement('input');
    quantityInput.type = 'number';
    quantityInput.value = item.quantity;
    quantityInput.classList.add('form-control');
    quantityInput.addEventListener('change', () => updateItemQuantity(item.id, quantityInput.value));
    quantityCell.appendChild(quantityInput);
    row.appendChild(quantityCell);

    // Total
    const totalCell = document.createElement('td');
    const itemTotal = item.price * item.quantity;
    totalCell.textContent = `$${itemTotal.toFixed(2)}`;
    row.appendChild(totalCell);

    // Add row to the table body
    tbody.appendChild(row);

    // Update the total price
    totalPrice += itemTotal;
  });

  // Create the total row
  const totalRow = document.createElement('tr');
  const totalLabelCell = document.createElement('td');
  totalLabelCell.textContent = 'Total:';
  totalLabelCell.colSpan = 3;
  totalLabelCell.classList.add('fw-bold');
  const totalAmountCell = document.createElement('td');
  totalAmountCell.textContent = `R${totalPrice.toFixed(2)}`;
  totalAmountCell.classList.add('fw-bold');
  totalRow.appendChild(totalLabelCell);
  totalRow.appendChild(totalAmountCell);
  tbody.appendChild(totalRow);

  checkoutTable.appendChild(tbody);
  return checkoutTable;
}

// Function to update the item quantity in the cart
function updateItemQuantity(itemId, newQuantity) {
  cart = cart.map(item => {
    if (item.id === itemId) {
      item.quantity = parseInt(newQuantity);
    }
    return item;
  });
  localStorage.setItem('cart', JSON.stringify(cart));
  checkoutTable = createCheckoutTable();
  mainContainer.innerHTML = '';
  mainContainer.appendChild(checkoutTable);
}

// Load the cart from localStorage
const cartFromStorage = localStorage.getItem('cart');
if (cartFromStorage) {
  cart = JSON.parse(cartFromStorage);
}

// Append the checkout table to the main container
mainContainer = document.querySelector('main');
checkoutTable = createCheckoutTable();
mainContainer.appendChild(checkoutTable);