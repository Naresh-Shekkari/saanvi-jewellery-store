/* Security */

if(
    localStorage.getItem("adminLoggedIn")
    !== "true"
){

    window.location.href =
    "login.html";

}

/* Firebase */

import { db }

from "./firebase.js";

import {

    collection,
    addDoc,
    getDocs,
    deleteDoc,
    doc

}

from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

/* Products */

let products = [];

loadProducts();

/* Add Product */

async function addProduct(){

    let name =
    document.getElementById("productName").value;

    let price =
    document.getElementById("productPrice").value;

    let category =

document.getElementById(
    "productCategory"
).value.toLowerCase();

    let imageInput =
    document.getElementById("productImage");

    let file =
    imageInput.files[0];

    if(

    name === "" ||

    price === "" ||

    category === "" ||

    !file

){

        alert("Please fill all fields");

        return;

    }

    let reader = new FileReader();

    reader.onload = async function(e){

    let product = {

    name:name,

    price:price,

    category:category,

    image:e.target.result

};

        await addDoc(

            collection(db,"products"),

            product

        );

        alert("Product Added Successfully");

        clearForm();

        loadProducts();

    };

    reader.readAsDataURL(file);

}

/* Load Products */

async function loadProducts(){

    let querySnapshot =
    await getDocs(
        collection(db,"products")
    );

    products = [];

    querySnapshot.forEach(docItem => {

        products.push({

            id:docItem.id,

            ...docItem.data()

        });

    });

    displayProducts();

}

/* Display Products */

function displayProducts(){

    let container =
    document.getElementById("adminProducts");

    container.innerHTML = "";

    products.forEach(product => {

        container.innerHTML += `

        <div class="admin-card">

            <img src="${product.image}">

            <h3>${product.name}</h3>

            <p>₹ ${product.price}</p>

            <div class="admin-btns">

                <button onclick="deleteProduct('${product.id}')">

                    Delete

                </button>

            </div>

        </div>

        `;

    });

}

/* Delete Product */

async function deleteProduct(id){

    let confirmDelete =
    confirm("Delete Product?");

    if(confirmDelete){

        await deleteDoc(
            doc(db,"products",id)
        );

        loadProducts();

    }

}

/* Clear Form */

function clearForm(){

    document.getElementById("productName")
    .value = "";

    document.getElementById("productPrice")
    .value = "";

    document.getElementById("productImage")
    .value = "";

    document.getElementById(
    "productCategory"
).value = "";

}

/* Logout */

function logout(){

    localStorage.removeItem(
        "adminLoggedIn"
    );

    window.location.href =
    "login.html";

}

/* Window Access */

window.addProduct = addProduct;

window.deleteProduct = deleteProduct;

window.logout = logout;