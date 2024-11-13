// Cart functionality
let cart = [];
let totalAmount = 0;

function addToCart(product) {
    cart.push(product);
    updateCart();
}

function updateCart() {
    const cartItemsDiv = document.getElementById("cartItems");
    cartItemsDiv.innerHTML = ""; // Clear previous items

    cart.forEach((item, index) => {
        const itemDiv = document.createElement("div");
        itemDiv.textContent = item;
        cartItemsDiv.appendChild(itemDiv);
    });

    // Update total
    totalAmount = cart.length * 10; // Example pricing, $10 per item
    document.getElementById("totalAmount").textContent = totalAmount;
}
