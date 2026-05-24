// Firebase Imports

import { initializeApp }

from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import {

    getFirestore

}

from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

/* Firebase Config */

const firebaseConfig = {

  apiKey: "AIzaSyCLDmn6oQjEkrbIFatBnjJKx0p34g8jFEo",

  authDomain: "saanvi-jewellery-store.firebaseapp.com",

  projectId: "saanvi-jewellery-store",

  storageBucket: "saanvi-jewellery-store.firebasestorage.app",

  messagingSenderId: "130524480744",

  appId: "1:130524480744:web:b8984977d703dea693b55d"

};

/* Initialize Firebase */

const app =
initializeApp(firebaseConfig);

/* Database */

const db =
getFirestore(app);

/* Export */

export { db };