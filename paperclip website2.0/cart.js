// cart.js

let cart = [];

// Function to update the cart display
function updateCart() {
    const cartContainer = document.getElementById('cart-container');
    const totalPriceElement = document.getElementById('total-price');

    // Clear current cart display
    cartContainer.innerHTML = '';

    if (cart.length === 0) {
        cartContainer.innerHTML = '<p>Your cart is empty.</p>';
    } else {
        // Display each item in the cart
        cart.forEach((item, index) => {
            const itemElement = document.createElement('div');
            itemElement.classList.add('cart-item');
            itemElement.innerHTML = `
                <p>${item.name} - $${item.price}</p>
                <button onclick="removeFromCart(${index})">Remove</button>
            `;
            cartContainer.appendChild(itemElement);
        });
    }

    // Update total price
    const total = cart.reduce((sum, item) => sum + item.price, 0);
    totalPriceElement.textContent = total.toFixed(2);
}

// Function to add a product to the cart
function addToCart(product) {
    cart.push(product);
    updateCart();
}

// Function to remove a product from the cart
function removeFromCart(index) {
    cart.splice(index, 1);
    updateCart();
}

// Function to clear the entire cart
function clearCart() {
    cart = [];
    updateCart();
}

// Set up the "Clear Cart" button functionality
document.getElementById('clear-cart').addEventListener('click', clearCart);

// This function will be triggered when a product is added to the cart
function addToCartAndPlaySound() {
    const product = {
        name: 'Gilded Clutché Paperclip',
        price: 500
    };
    addToCart(product);
    // Play sound on successful addition to cart
    const sound = document.getElementById('victory-sound');
    sound.play();
}

// Trigger the add to cart function on button click
document.querySelector('.add-to-cart').addEventListener('click', addToCartAndPlaySound);

// Initial cart display update
updateCart();
