
/* Check Admin Login */

if(
    localStorage.getItem("adminLoggedIn")
    !== "true"
){

    window.location.href =
    "login.html";

}

/* Load Saved Products */

let products =
JSON.parse(localStorage.getItem("products"))
|| [];

/* Display Saved Products */

displayProducts();

/* Add Product */

function addProduct(){
let name =
    document.getElementById("productName").value;

    let price =
    document.getElementById("productPrice").value;

    let imageInput =
    document.getElementById("productImage");

    let file =
    imageInput.files[0];

    if(name === "" || price === "" || !file){

        alert("Please fill all fields");

        return;

    }

    let reader = new FileReader();

    reader.onload = function(e){

        let product = {

            id: Date.now(),

            name:name,

            price:price,

            image:e.target.result

        };

        products.push(product);

        saveProducts();

        displayProducts();

        clearForm();

    };

    reader.readAsDataURL(file);
}

/* Save Products */

function saveProducts(){

    localStorage.setItem(
        "products",
        JSON.stringify(products)
    );

}

/* Display Products */

function displayProducts(){

    let container =
    document.getElementById("adminProducts");

    container.innerHTML = "";

    products.forEach((product,index) => {

        container.innerHTML += `

        <div class="admin-card">

            <img src="${product.image}">

            <h3>${product.name}</h3>

            <p>₹ ${product.price}</p>

            <small>
                Product ID:
                ${product.id}
            </small>

            <div class="admin-btns">

                <button onclick="editProduct(${index})">

                    Edit

                </button>

                <button onclick="deleteProduct(${index})">

                    Delete

                </button>

            </div>

        </div>

        `;

    });

}

/* Delete Product */

function deleteProduct(index){

    let confirmDelete =
    confirm("Delete this product?");

    if(confirmDelete){

        products.splice(index,1);

        saveProducts();

        displayProducts();

    }

}

/* Edit Product */

function editProduct(index){

    let product = products[index];

    let newName =
    prompt("Enter New Product Name",
    product.name);

    let newPrice =
    prompt("Enter New Price",
    product.price);

    if(newName && newPrice){

        product.name = newName;

        product.price = newPrice;

        saveProducts();

        displayProducts();

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

}

/* Logout */

function logout(){

    localStorage.removeItem(
        "adminLoggedIn"
    );

    window.location.href =
    "login.html";

}