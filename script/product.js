//
// Create products and store it on the local storage
// Select the wrapper element
let wrapper = document.querySelector("[recentProducts]");
let cartBtn = document.querySelector("[cart-btn]")

let checkoutItems = []

let allProducts = document.querySelector("[allProducts]")

// Check and initialize the products in localStorage
let products = JSON.parse(localStorage.getItem("products")) || [
  {
    id: 1,
    productName: "Jerry Curls",
    category: "Curls",
    description: "10 inch  Curls which are natural color",
    amount: 2800,
    img_url: "https://mbalentlediko.github.io/Images/static/product1.jpg",
  },
  {
    id: 2,
    productName: "Bob weave",
    category: "Bob",
    description: "8 inch peruvian Short Bob",
    amount: 3000,
    img_url: "https://mbalentlediko.github.io/Images/static/product2.jpg",
  },
  {
    id: 3,
    productName: "Straight hair",
    category: "Straight",
    description: "32 inch natural color Standard double drawn Human lace weave",
    amount: 8500,
    img_url: "https://mbalentlediko.github.io/Images/static/product3.jpg",
  },
  {
    id: 4,
    productName: "Bob weave",
    category: "Bob",
    description: "16 inch natural color Peruvian Bob",
    amount: 4000,
    img_url: "https://mbalentlediko.github.io/Images/static/product4.jpg",
  },
  {
    id: 5,
    productName: "Water Wave",
    category: "Curls",
    description: "32 inch Peruvian Brown Curls",
    amount: 8800,
    img_url: "https://mbalentlediko.github.io/Images/static/product5.jpg",
  },
  {
    id: 6,
    productName: "Weave wash set",
    category: "Weave products",
    description: "curly Weave wash set that consits of 4 products ",
    amount: 8800,
    img_url: "https://mbalentlediko.github.io/Images/static/Ms Know it all products.jpg",
  },
  {
    id: 7,
    productName: "Melanin Products",
    category: "Weave products",
    description: " Straight Weave wash set that consits of 3 products",
    amount: 200,
    img_url: "https://mbalentlediko.github.io/Images/static/malanin Products.jpg",
  },
];

localStorage.setItem("products", JSON.stringify(products));

function displayProducts(products){
    try {
        products.forEach(product => {
            allProducts.innerHTML += `
            <div class="card">
                    <img src="${product.img_url}" class="card-img-top" alt="product-img" loading='lazy'>
                    <div class="card-body">
                        <h5 class="card-title">${product.productName}</h5>
                        <p class="card-text">${product.description}</p>
                        <p class="card-text">R${product.amount}</p>
                        <button class="btn btn-info" onclick="addToCart(${product.id})"><i class="bi bi-bag-fill"></i></button>
                    </div>
                </div>
            ` 
        })
    } catch (error) {
        console.log(error);
    }
}
displayProducts(products)

// Set current year
// document.querySelector("[currentYear]").textContent =
//   new Date().getUTCFullYear();

function recentProducts() {
  try {
    let latestProducts = [...products]
      .reverse()
      .slice(0, Math.ceil(products.length / 2));
    latestProducts.forEach((product) => {
      wrapper.innerHTML += `
                <div class="card">
                    <img src="${product.img_url}" class="card-img-top" alt="${product.productName}" loading='lazy'>
                    <div class="card-body">
                        <h5 class="card-title">${product.productName}</h5>
                        <p class="card-text">${product.description}</p>
                    </div>
                </div>
            `;
    });
  } catch (e) {
    wrapper.textContent = "Please contact our administrator";
    setTimeout(() => {
      location.reload();
    }, 2000);
  }
}
recentProducts();

// Counter
window.onload = () => {
  document.querySelector("[counter]").textContent = JSON.parse(
    localStorage.getItem("checkout")
  )
    ? JSON.parse(localStorage.getItem("checkout")).length
    : 0;
};


function addToCart(productId) {
   try {
    let cartItems = JSON.parse(localStorage.getItem("cart")) || []
    products.forEach(item => {
        if(item.id === productId){
            console.log(item);
            cartItems.push(item)
            localStorage.setItem("cart", JSON.stringify(cartItems))
            updateCounter()
        }
    })
   } catch (error) {
    alert("Product could not be added to cart.")
    console.error("Error adding to cart", error);
   }
}

function updateCounter() {
    let cartItems = JSON.parse(localStorage.getItem("cart"))
    document.querySelector("[counter]").textContent = cartItems.length
}