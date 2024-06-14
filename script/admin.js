let adminContainer = document.querySelector('[admin-container]')

let allProducts = JSON.parse(localStorage.getItem("products")) || [
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

  localStorage.setItem("products", JSON.stringify(allProducts));


function displayProducts() {
    allProducts.forEach(product => {
        adminContainer.innerHTML += `
        <tr>
        <div class="cart-items row">
        <img class="col cart-item-image" src="${product.img_url}" alt="product-img">
        <span class="col cart-product-title">${product.productName}</span>
        <div class="col column cart-price cart-column">R${product.amount}</div>
        <div class="col">${product.description}</div>
        <div class="col"><button class="col btn btn-danger" type="button">REMOVE</button></div>
      </div>
        </tr>

        `
    }
    )
}

displayProducts()