/* Loader */

window.addEventListener("load", function(){

    document.querySelector(".loader")
    .style.display = "none";

});

/* Cart */

let count = 0;
let total = 0;

function addToCart(price){

    count++;

    total += price;

    document.getElementById("cartCount")
    .innerText = count;

    document.getElementById("itemCount")
    .innerText = count;

    document.getElementById("totalPrice")
    .innerText = total;

}

/* Cart Popup */

function openCart(){

    document.getElementById("cartPopup")
    .style.display = "flex";

}

function closeCart(){

    document.getElementById("cartPopup")
    .style.display = "none";

}

/* Product Details */

function openDetails(name, price){

    document.getElementById("detailsPopup")
    .style.display = "flex";

    document.getElementById("productTitle")
    .innerText = name;

    document.getElementById("productPrice")
    .innerText = price;

}

function closeDetails(){

    document.getElementById("detailsPopup")
    .style.display = "none";

}

/* Checkout */

function openCheckout(){

    document.getElementById("checkoutPopup")
    .style.display = "flex";

}

function closeCheckout(){

    document.getElementById("checkoutPopup")
    .style.display = "none";

}

/* Order */

function placeOrder(){

    closeCheckout();

    document.getElementById("successPopup")
    .style.display = "flex";

    setTimeout(() => {

        document.getElementById("successPopup")
        .style.display = "none";

    }, 3000);

}

/* Theme */

function toggleTheme(){

    document.body.classList.toggle(
        "dark-theme"
    );

}

/* Mobile Menu */

function toggleMenu(){

    document.getElementById("navLinks")
    .classList.toggle("active");

}

/* Search */

const searchInput =
document.getElementById("searchInput");

searchInput.addEventListener("keyup", function(){

    let filter =
    searchInput.value.toLowerCase();

    let cards =
    document.querySelectorAll(".product-card");

    cards.forEach(card => {

        let text =
        card.innerText.toLowerCase();

        if(text.includes(filter)){

            card.style.display = "block";

        }

        else{

            card.style.display = "none";

        }

    });

});

/* Reveal Animation */

window.addEventListener("scroll", reveal);

function reveal(){

    let reveals =
    document.querySelectorAll(".reveal");

    for(let i=0; i<reveals.length; i++){

        let windowHeight =
        window.innerHeight;

        let revealTop =
        reveals[i].getBoundingClientRect().top;

        let revealPoint = 100;

        if(revealTop < windowHeight - revealPoint){

            reveals[i].classList.add("active");

        }

    }

}