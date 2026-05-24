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

/* Load Products From Admin */

//loadProducts();
localStorage.getItem("products")

/*function loadProducts(){

    let products =
    JSON.parse(localStorage.getItem("products"))
    || [];

    let container =
    document.getElementById("productContainer");

    if(!container) return;

    container.innerHTML = "";

    products.forEach(product => {

        container.innerHTML += `

        <div class="product-card reveal">

            <img src="${product.image}">

            <h3>
                ${product.name}
            </h3>

            <p class="price">
                ₹ ${product.price}
            </p>

            <button onclick="addToCart(${product.price})">

                Add To Cart

            </button>

            <button class="details-btn"
            onclick="openDetails(
            '${product.name}',
            '₹ ${product.price}'
            )">

                View Details

            </button>

        </div>

        `;

    });

}*/

/* Firebase */

import { db }

from "./firebase.js";

import {

    collection,
    getDocs

}

from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

/* Load Products */

loadProducts();

async function loadProducts(){

    let container =
    document.getElementById("productContainer");

    if(!container) return;

    container.innerHTML = "";

    let querySnapshot =
    await getDocs(
        collection(db,"products")
    );

    querySnapshot.forEach(doc => {

        let product = doc.data();

        container.innerHTML += `

        <div class="product-card reveal">

            <img src="${product.image}">

            <h3>
                ${product.name}
            </h3>

            <p class="price">

                ₹ ${product.price}

            </p>

            <div class="product-buttons">

    <button class="whatsapp-icon-btn"

    onclick="orderOnWhatsApp(

    '${product.name}',

    '${product.price}'

    )">

        <i class="fab fa-whatsapp"></i>

    </button>

    <button class="details-btn"

onclick="viewDetails(

'${product.name}',

'${product.price}',

'${product.image}'

)">

    View Details

</button>

</div>

        </div>

        `;

    });

}

/* WhatsApp Order */

function orderOnWhatsApp(
    productName,
    productPrice
){

    let phoneNumber =
    "918374791604";

    let message =

`Hello Saanvi Handmade Jewellery Store,

I would like to order this product:

Product Name: ${productName}

Price: ₹ ${productPrice}

Please share more details.`;

    let whatsappURL =

`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    window.open(
        whatsappURL,
        "_blank"
    );

}

window.orderOnWhatsApp =
orderOnWhatsApp;

/* View Details */

function viewDetails(
    name,
    price,
    image
){

    localStorage.setItem(
        "detailsName",
        name
    );

    localStorage.setItem(
        "detailsPrice",
        price
    );

    localStorage.setItem(
        "detailsImage",
        image
    );

    window.location.href =
    "product.html";

}

window.viewDetails =
viewDetails;