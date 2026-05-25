/* Loader */

window.addEventListener("load", function(){

    let loader = document.querySelector(".loader");

    if(loader){

        loader.style.display = "none";
    }

});

/* Cart */

let count = 0;
let total = 0;

/* Global Products */

let allProducts = [];

/* Add To Cart */

function addToCart(price){

    count++;

    total += Number(price);

    document.getElementById("cartCount")
    .innerText = count;

    document.getElementById("itemCount")
    .innerText = count;

    document.getElementById("totalPrice")
    .innerText = total;

}

/* Cart Popup */

function openCart(){

    let popup =
    document.getElementById("cartPopup");

    if(popup){

        popup.style.display = "flex";
    }

}

function closeCart(){

    let popup =
    document.getElementById("cartPopup");

    if(popup){

        popup.style.display = "none";
    }

}

/* Theme */

function toggleTheme(){

    document.body.classList.toggle(
        "dark-theme"
    );

}

/* Mobile Menu */

function toggleMenu(){

    let navLinks =
    document.getElementById("navLinks");

    navLinks.classList.toggle(
        "active"
    );

}

window.toggleMenu = toggleMenu;

/* Reveal Animation */

window.addEventListener("scroll", reveal);

function reveal(){

    let reveals =
    document.querySelectorAll(".reveal");

    for(let i = 0; i < reveals.length; i++){

        let windowHeight =
        window.innerHeight;

        let revealTop =
        reveals[i]
        .getBoundingClientRect().top;

        let revealPoint = 100;

        if(revealTop < windowHeight - revealPoint){

            reveals[i].classList.add(
                "active"
            );

        }

    }

}

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
    document.getElementById(
        "productContainer"
    );

    if(!container) return;

    container.innerHTML = "";

    let querySnapshot =
    await getDocs(
        collection(db,"products")
    );

    allProducts = [];

    querySnapshot.forEach(doc => {

        let product = doc.data();

        allProducts.push(product);

    });

    displayProducts(allProducts);

}

/* Display Products */

function displayProducts(products){

    let container =
    document.getElementById(
        "productContainer"
    );

    container.innerHTML = "";

    /* No Products */

    if(products.length === 0){

        container.innerHTML = `

        <h2 class="no-products">

            No Products Found

        </h2>

        `;

        return;
    }

    /* Show Products */

    products.forEach(product => {

        container.innerHTML += `

        <div class="product-card reveal">

            <img src="${product.image}"

            alt="${product.name}">

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

/* Product Search */

let searchInput =
document.getElementById(
    "searchInput"
);

if(searchInput){

    searchInput.addEventListener(
        "keyup",

    function(){

        let searchValue =
        this.value.toLowerCase();

        let filteredProducts =

        allProducts.filter(product =>

            product.name
            .toLowerCase()
            .includes(searchValue)

        );

        displayProducts(
            filteredProducts
        );

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

/* ===================================== */
/* AUTO PRODUCT SLIDER */
/* ===================================== */

setInterval(() => {

    let container =

    document.getElementById(
        "productContainer"
    );

    if(!container) return;

    container.scrollBy({

        left:320,

        behavior:"smooth"

    });

    /* Restart Slider */

    if(

        container.scrollLeft +

        container.clientWidth >=

        container.scrollWidth

    ){

        container.scrollTo({

            left:0,

            behavior:"smooth"

        });

    }

}, 3000);