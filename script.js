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

setInterval(() => {
    moveSlide(1); // Move to the next slide automatically
}, 5000);

//Outer pages

class myHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <!--Header-->
    <header>
        <div class="header-container">
            <!-- Logo -->
            <div class="logo">
                <a href="index.html"><img src="images/logo.png" alt="Flower Bouquets Store Logo"></a>
            </div>

            <!-- Navigation links -->
            <nav>
                <ul>
                    <!--Adding the category list to a dropdown menu-->
                    <li class="dropdown">

                        <a href="#" class="dropbtn">Bouquets</a>
                        <div class="dropdown-content">
                            <a href="product-page/rose.html">Roses</a>
                            <a href="product-page/tulip.html">Tulips</a>
                            <a href="product-page/lilies.html">Lilies</a>
                            <a href="product-page/orchids.html">Orchids</a>
                            <a href="product-page/mixed.html">Mixed Bouquets</a>
                        </div>
                    </li>
                    <li class="dropdown">
                        <a href="#" class="dropbtn">Occassion</a>
                        <div class="dropdown-content">
                            <a href="product-page/wedding.html">Wedding</a>
                            <a href="product-page/birthday.html">Birthday</a>
                            <a href="product-page/anniversary.html">Anniversary</a>
                            <a href="product-page/congratulations.html">Congratulations</a>
                            <a href="product-page/sorry.html">Sorry</a>
                        </div>
                    </li>
                    <li class="dropdown">
                        <a href="#" class="dropbtn">Gifts</a>
                        <div class="dropdown-content">
                            <a href="product-page/her.html">Gift for Her</a>
                            <a href="product-page/him.html">Gift for Him</a>
                            <a href="product-page/mom.html">Gift for Mom</a>
                            <a href="product-page/dad.html">Gift for Dad</a>
                            <a href="product-page/girlfriend.html">Gift for Girlfriend</a>
                            <a href="product-page/boyfriend.html">Gift for Boyfriend</a>
                        </div>
                    </li>
                    <li class="dropdown">
                        <a href="#" class="dropbtn">Cities</a>
                        <div class="dropdown-content">
                            <a href="product-page/kolkata.html">Kolkata</a>
                            <a href="product-page/delhi.html">Delhi</a>
                            <a href="product-page/mumbai.html">Mumbai</a>
                            <a href="product-page/bangalore.html">Bangalore</a>
                            <a href="product-page/hyderabad.html">Hyderabad</a>
                            <a href="product-page/cities.html">All Cities</a>

                        </div>
                    </li>
                    <li><a href="combo.html">Combos</a></li>
                    <li><a href="about.html">About Us</a></li>
                    <li><a href="contact.html">Contact Us</a></li>
                </ul>
            </nav>

            <!-- Search bar -->
            <div class="search-bar">
                <input type="text" placeholder="Search for bouquets...">
                <button type="submit">Search</button>
            </div>

            <!--Cart button-->
            <button class="cart-btn">
                <a href="cart.html"><img src="images/cart-icon.png" alt="Cart Icon"></a>
                
                <span id="cart-count">0</span> <!-- This will dynamically show the number of items -->
            </button>

            <!-- Login button -->
            <div class="login-btn">
                <a href="login.html">Login/SignUp</a>
            </div>
        </div>
    </header> 
        `
    }
}

customElements.define('my-header', myHeader)

class myFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <footer class="site-footer">
            <div class="footer-content">
                <div class="footer-links">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><a href="index.html">Home</a></li>
                        <li><a href="about.html">About Us</a></li>
                        <li><a href="combo.html">Combos</a></li>
                        <li><a href="contact.html">Contact Us</a></li>
                    </ul>
                </div>
                
                <div class="footer-terms">
                    <h3>Terms & Policies</h3>
                    <ul>
                        <li><a href="privacy-policy.html">Privacy Policy</a></li>
                        <li><a href="terms-and-conditions.html">Terms & Conditions</a></li>
                        <li><a href="refund-policy.html">Refund Policy</a></li>
                        <li><a href="shipping-policy.html">Shipping Policy</a></li>
                    </ul>
                </div>
                
                <div class="footer-contact">
                    <h3>Contact Us</h3>
                    <p>Email: support@flowershop.com</p>
                    <p>Phone: +1 (123) 456-7890</p>
                    <p>Address: 123 Flower Street, Floral City, FL 12345</p>
                </div>
            </div>
            
            <div class="footer-bottom">
                <p>&copy; 2024 Flower Bouquets. All rights reserved.</p>
            </div>
        </footer>
        `
    }
}

customElements.define('my-footer', myFooter)

//Inner pages 

class myInnerHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <!--Header-->
        <header>
        <div class="header-container">
            <!-- Logo -->
            <div class="logo">
                <a href="../index.html"><img src="../images/logo.png" alt="Flower Bouquets Store Logo"></a>
            </div>

            <!-- Navigation links -->
            <nav>
                <ul>
                    <!--Adding the category list to a dropdown menu-->
                    <li class="dropdown">
                        <a href="#" class="dropbtn">Bouquets</a>
                        <div class="dropdown-content">
                            <a href="rose.html">Roses</a>
                            <a href="tulip.html">Tulips</a>
                            <a href="lilies.html">Lilies</a>
                            <a href="orchids.html">Orchids</a>
                            <a href="mixed.html">Mixed Bouquets</a>
                        </div>
                    </li>
                    <li class="dropdown">
                        <a href="#" class="dropbtn">Occassion</a>
                        <div class="dropdown-content">
                            <a href="wedding.html">Wedding</a>
                            <a href="birthday.html">Birthday</a>
                            <a href="congratulations.html">Congratulations</a>
                            <a href="sorry.html">Sorry</a>
                            <a href="anniversary.html">Anniversary</a>
                        </div>
                    </li>
                    <li class="dropdown">
                        <a href="#" class="dropbtn">Gifts</a>
                        <div class="dropdown-content">
                            <a href="her.html">Gift for Her</a>
                            <a href="him.html">Gift for Him</a>
                            <a href="mom.html">Gift for Mom</a>
                            <a href="dad.html">Gift for Dad</a>
                            <a href="girlfriend.html">Gift for Girlfriend</a>
                            <a href="boyfriend.html">Gift for Boyfriend</a>
                        </div>
                    </li>
                    <li class="dropdown">
                        <a href="#" class="dropbtn">Cities</a>
                        <div class="dropdown-content">
                            <a href="kolkata.html">Kolkata</a>
                            <a href="delhi.html">Delhi</a>
                            <a href="mumbai.html">Mumbai</a>
                            <a href="bangalore.html">Bangalore</a>
                            <a href="hyderabad.html">Hyderabad</a>
                            <a href="cities.html">All Cities</a>
                        </div>
                    </li>
                    <li><a href="../combo.html">Combos</a></li>
                    <li><a href="../about.html">About Us</a></li>
                    <li><a href="../contact.html">Contact Us</a></li>
                </ul>
            </nav>

            <!-- Search bar -->
            <div class="search-bar">
                <input type="text" placeholder="Search for bouquets...">
                <button type="submit">Search</button>
            </div>

            <!--Cart button-->
            <button class="cart-btn">
                <a href="../cart.html"><img src="../images/cart-icon.png" alt="Cart Icon"></a>
                <span id="cart-count">0</span> <!-- This will dynamically show the number of items -->
            </button>

            <!-- Login button -->
            <div class="login-btn">
                <a href="../login.html">Login/SignUp</a>
            </div>
        </div>
    </header> 
        `
    }
}

customElements.define('my-innerheader', myInnerHeader)

class myInnerFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <footer class="site-footer">
            <div class="footer-content">
                <div class="footer-links">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><a href="index.html">Home</a></li>
                        <li><a href="about.html">About Us</a></li>
                        <li><a href="combo.html">Combos</a></li>
                        <li><a href="contact.html">Contact Us</a></li>
                    </ul>
                </div>
                
                <div class="footer-terms">
                    <h3>Terms & Policies</h3>
                    <ul>
                        <li><a href="privacy-policy.html">Privacy Policy</a></li>
                        <li><a href="terms-and-conditions.html">Terms & Conditions</a></li>
                        <li><a href="refund-policy.html">Refund Policy</a></li>
                        <li><a href="shipping-policy.html">Shipping Policy</a></li>
                    </ul>
                </div>
                
                <div class="footer-contact">
                    <h3>Contact Us</h3>
                    <p>Email: support@flowershop.com</p>
                    <p>Phone: +1 (123) 456-7890</p>
                    <p>Address: 123 Flower Street, Floral City, FL 12345</p>
                </div>
            </div>
            
            <div class="footer-bottom">
                <p>&copy; 2024 Flower Bouquets. All rights reserved.</p>
            </div>
        </footer>
        `
    }
}

customElements.define('my-inner-footer', myInnerFooter)

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

// Contact form submission handler
document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission to refresh page

    // Collect form data
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Validate form (you can add more detailed validation as needed)
    if (name === "" || email === "" || message === "") {
        alert("Please fill out all fields.");
        return;
    }

    // Simple success alert (you can replace this with an AJAX request to submit the form data)
    alert(`Thank you, ${name}! Your message has been sent.`);
    
    // Clear the form
    document.getElementById("contact-form").reset();
});

// Handle "Add to Cart" button clicks on combo items
const addToCartButtons = document.querySelectorAll('.add-to-cart');

addToCartButtons.forEach(button => {
    button.addEventListener('click', function() {
        const comboName = this.parentElement.querySelector('h3').innerText;
        const comboPrice = this.parentElement.querySelector('.price').innerText;

        // Log combo added to the cart (you can replace this with cart logic)
        console.log(`Added to cart: ${comboName} - ${comboPrice}`);

        // Visual feedback (optional)
        alert(`${comboName} has been added to your cart!`);
    });
});
