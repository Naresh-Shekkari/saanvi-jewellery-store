/* Get Product Data */

let productName =
localStorage.getItem("detailsName");

let productPrice =
localStorage.getItem("detailsPrice");

let productImage =
localStorage.getItem("detailsImage");

/* Set Product Details */

document.getElementById(
    "detailsName"
).innerText = productName;

document.getElementById(
    "detailsPrice"
).innerText =
"₹ " + productPrice;

document.getElementById(
    "detailsImage"
).src = productImage;

/* WhatsApp Order */

document.getElementById(
    "detailsWhatsappBtn"
)

.addEventListener(
    "click",

function(){

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

});