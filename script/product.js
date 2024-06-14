// 
// Create products and store it on the local storage
// Select the wrapper element
let wrapper = document.querySelector('[recentProducts]');

// Check and initialize the products in localStorage
let products = JSON.parse(localStorage.getItem('products'));
if (!products) {
    products = [
        {
            id: 1,
            productName: "Jerry Curls",
            category: "Curls",
            description: "10 inch  Curls which are natural color",
            amount: 2800,
            img_url: "https://mbalentlediko.github.io/Images/static/product1.jpg"
        },
        {
            id: 2,
            productName: "Bob weave",
            category: "Bob",
            description: "8 inch peruvian Short Bob",
            amount: 3000,
            img_url: "https://mbalentlediko.github.io/Images/static/product2.jpg"
        },
        {
            id: 3,
            productName: "Straight hair",
            category: "Straight",
            description: "32 inch natural color Standard double drawn Human lace weave",
            amount: 8500,
            img_url: "https://mbalentlediko.github.io/Images/static/product3.jpg"
        },
        {
            id: 4,
            productName: "Bob weave",
            category: "Bob",
            description: "16 inch natural color Peruvian Bob",
            amount: 4000,
            img_url: "https://mbalentlediko.github.io/Images/static/product4.jpg"
        },
        {
            id: 5,
            productName: "Water Wave",
            category: "Curls",
            description: "32 inch Peruvian Brown Curls",
            amount: 8800,
            img_url: "https://mbalentlediko.github.io/Images/static/product5.jpg"
        }
    ];
    localStorage.setItem('products', JSON.stringify(products));
} else {
    products = JSON.parse(localStorage.getItem('products'));
}

// Set current year
document.querySelector('[currentYear]').textContent = new Date().getUTCFullYear();

function recentProducts() {
    try {
        let latestProducts = [...products].reverse().slice(0, Math.ceil(products.length / 2));
        latestProducts.forEach(product => {
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
    document.querySelector('[counter]').textContent = JSON.parse(localStorage.getItem('checkout'))
        ? JSON.parse(localStorage.getItem('checkout')).length
        : 0;
};