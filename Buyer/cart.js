// Function to load cart items from localStorage and display them
function loadCartItems() {
    const cart = getCart();
    const cartItemsContainer = document.getElementById('cart-items');
    cartItemsContainer.innerHTML = ''; // Clear existing items

    let total = 0;

    //Get Cart Items
    cart.forEach(item => {
        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');

        const itemTotalPrice = (item.price * item.quantity).toFixed(2);

        cartItem.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <div class="cart-item-details">
                <div class="cart-item-name">${item.name}</div>
                <div class="cart-item-price">$${item.price.toFixed(2)}</div>
                <div class="cart-item-quantity">
                    <input type="number" value="${item.quantity}" min="1" data-id="${item.id}">
                </div>
            </div>
            <div class="cart-item-total-price">$${itemTotalPrice}</div>
        `;

        cartItemsContainer.appendChild(cartItem);

        // Update total
        total += parseFloat(itemTotalPrice);
    });

    document.getElementById('total-price').textContent = total.toFixed(2);

    // Add event listeners to update the quantity
    document.querySelectorAll('.cart-item-quantity input').forEach(input => {
        input.addEventListener('change', updateQuantity);
    });
}

// Function to update the quantity of an item in the cart
function updateQuantity(event) {
    const itemId = parseInt(event.target.getAttribute('data-id'));
    const newQuantity = parseInt(event.target.value);

    const cart = getCart();
    const item = cart.find(item => item.id === itemId);

    if (item) {
        item.quantity = newQuantity;
        saveCart(cart);
        loadCartItems(); // Reload cart items with updated quantities
    }
}

// On page load, display cart items
document.addEventListener('DOMContentLoaded', loadCartItems);
