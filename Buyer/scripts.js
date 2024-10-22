let currentSlideIndex = 0;
showSlide(currentSlideIndex);

function showSlide(index) {
    const slides = document.getElementsByClassName("slide");
    if (index >= slides.length) {
        currentSlideIndex = 0; // Loop back to first slide
    }
    if (index < 0) {
        currentSlideIndex = slides.length - 1; // Go to last slide
    }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; // Hide all slides
    }
    slides[currentSlideIndex].style.display = "block"; // Show the selected slide
}

function moveSlide(step) {
    currentSlideIndex += step;
    showSlide(currentSlideIndex);
}

// Auto-slide feature (optional)
// Uncomment the below lines to enable auto-sliding every 5 seconds
/*
setInterval(() => {
    moveSlide(1); // Move to the next slide automatically
}, 5000);
*/


// Switch between Login and Register
document.getElementById('switch-to-register').addEventListener('click', function (e) {
    e.preventDefault();
    document.getElementById('login-form').style.display = 'none';
    document.getElementById('register-form').style.display = 'block';
});

document.getElementById('switch-to-login').addEventListener('click', function (e) {
    e.preventDefault();
    document.getElementById('login-form').style.display = 'block';
    document.getElementById('register-form').style.display = 'none';
});

// cart.js or products.js

// Function to get cart from localStorage or initialize a new one
function getCart() {
    const cart = localStorage.getItem('cart');
    return cart ? JSON.parse(cart) : [];
}

// Function to save cart to localStorage
function saveCart(cart) {
    localStorage.setItem('cart', JSON.stringify(cart));
}

// Function to add an item to the cart
function addToCart(product) {
    const cart = getCart();
    
    // Check if the item already exists in the cart
    const existingItem = cart.find(item => item.id === product.id);

    if (existingItem) {
        // If the item exists, increment the quantity
        existingItem.quantity += 1;
    } else {
        // If the item does not exist, add it to the cart
        cart.push({ ...product, quantity: 1 });
    }

    saveCart(cart);
    alert(`${product.name} has been added to your cart.`);
}

// Event listener to add products to the cart when "Add to Cart" button is clicked
document.querySelectorAll('.add-to-cart-btn').forEach(button => {
    button.addEventListener('click', function() {
        const card = this.closest('.product-card');
        
        const product = {
            id: parseInt(card.getAttribute('data-id')),
            name: card.getAttribute('data-name'),
            price: parseFloat(card.getAttribute('data-price')),
            image: card.getAttribute('data-image')
        };

        addToCart(product);
    });
});


// Scroll-to-top button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    const scrollTopBtn = document.getElementById("scrollTopBtn");
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
        scrollTopBtn.style.display = "block";
    } else {
        scrollTopBtn.style.display = "none";
    }
}

document.getElementById("scrollTopBtn").addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
