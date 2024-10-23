// Open and close modal for adding new product
const modal = document.getElementById("add-product-modal");
const addProductBtn = document.getElementById("add-product-btn");
const closeBtn = document.querySelector(".close-btn");

addProductBtn.onclick = function () {
    modal.style.display = "flex";
};

closeBtn.onclick = function () {
    modal.style.display = "none";
};

// Close the modal if user clicks outside of it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};

// Toggle between login and register forms
document.getElementById('switch-to-register').addEventListener('click', function() {
    document.getElementById('login-form').style.display = 'none';
    document.getElementById('register-form').style.display = 'block';
});

document.getElementById('switch-to-login').addEventListener('click', function() {
    document.getElementById('register-form').style.display = 'none';
    document.getElementById('login-form').style.display = 'block';
});
