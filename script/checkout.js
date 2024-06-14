

// Load checkout items from localStorage
// let orders = JSON.parse(localStorage.getItem("checkout")) || [];
// let tableElement = document.querySelector("[table]");
// let checkoutTotal = document.querySelector("[checkoutTotal]");

let checkoutContainer = document.getElementById('checkout-content')

let checkoutItems = JSON.parse(localStorage.getItem("cart"))

function updateCheckout(products) {
  if (products && products.length > 0) {
    try {
      checkoutContainer.innerHTML = ""

      products.forEach(item => {
        let existingItem = checkoutItems.find(existingItem => existingItem.id === item.id);
        if (existingItem) {
            existingItem.quantity++;
          } else {
            item.quantity = 1;
            checkoutItems.push(item);
          }
          const cartItemHTML = `
          <div class="cart-items row">
            <img class="col cart-item-image" src="${item.img_url}" width="100" height="100">
            <span class="col cart-item-title">${item.productName}</span>
            <div class="col column cart-price cart-column quantity-input">R${item.amount}</div>
            <div class="col"><input class="cart-quantity-input quantity-input" type="number" value="${item.quantity}" quantity-element data-product-id="${item.id}"></div> 
            <div class="col"><input class="col" readonly placeholder="Total" subTotal data-product-id="${item.id}"></input></div>
            <div class="col"><button class="col btn btn-danger" type="button">REMOVE</button></div>
          </div>
          `;

        checkoutContainer.innerHTML += cartItemHTML

        const cartItemElement = checkoutContainer.lastElementChild;
        let quantityElement = document.querySelector(`[quantity-element]`);
        let subTotalElement = document.querySelector(`[subTotal]`);
        
        quantityElement.addEventListener("change", () => {
            let price = item.amount;
            let quantity = quantityElement.value;
            let subTotal = price * quantity;
            subTotalElement.value = `R${subTotal.toFixed(2)}`;
          })
      })
    } catch (error) {
      console.error("Cannot display cart items", error);
    }
  } else {
    checkoutContainer.innerHTML = "Your cart is empty.";
  }
}

updateCheckout(checkoutItems)


// // Event listener for quantity change
// document.addEventListener("change", (event) => {
//   if (event.target.matches("[quantity]")) {
//     let index = event.target.getAttribute("data-index");
//     let price = orders[index].amount;
//     let quantity = event.target.value;
//     let subtotalElement = event.target.closest(".cart-row").querySelector("[subtotal]");
//     let subtotal = price * quantity;
//     subtotalElement.textContent = `R${subtotal.toFixed(2)}`;
//     calculateTotal();
//   }
// });

// // Event listener for removing items
// document.addEventListener("click", (event) => {
//   if (event.target.closest(".btn-remove")) {
//     let index = event.target.closest(".btn-remove").getAttribute("data-index");
//     orders.splice(index, 1);
//     localStorage.setItem("checkout", JSON.stringify(orders));
//     updateCheckoutPage();
//     calculateTotal();
//   }
// });

// // Initial call to update the checkout page
// updateCheckoutPage();

