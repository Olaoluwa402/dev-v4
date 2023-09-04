import {
  openModal,
  closeModal,
  alertMsg,
  getItemsStore,
  saveItemToStore,
  displayCartCount,
} from "./common.js";

if (document.readyState == "loading") {
  document.addEventListener("DOMContentLoaded", ready);
} else {
  ready();
}


function ready() {
  // load cart count
  displayCartCount();
  //load all products
  displayProducts();

  let addProductBtn = document.querySelector(".add-product-btn");
  addProductBtn.addEventListener("click", () => openModal(0));

  // Get the <span> element that closes the modal
  let closeProductModalBtn = document.getElementsByClassName("modal-close")[0];
  closeProductModalBtn.addEventListener("click", () => closeModal(0));

  //   add product
  const submitProductBtn = document.querySelector("#add-product-btn");
  submitProductBtn.addEventListener("click", addProductHandler);

  // add product to cart
  const addToCartBtn = document.querySelectorAll(".tocart");
  addToCartBtn.forEach((btn) => {
    btn.addEventListener("click", addToCartHandler);
  });
}

function addProductHandler() {
  //collect form fields
  const title = document.querySelector(".product-title").value;
  const imageUrl = document.querySelector(".product-img").value;
  const imageFile = document.querySelector(".product-file").files[0];
  const price = document.querySelector(".product-price").value;
  const old_price = document.querySelector(".product-old_price").value;
  const desc = document.querySelector(".product-desc").value;
  console.log(price);
  //upload image
  saveImageToCloud(imageFile);

  const data = {
    title,
    price,
    old_price,
    imageUrl,
    desc,
  };

  //   validation
  const validatResult = validate(data);
  if (Object.keys(validatResult).length > 0) {
    alertMsg("Form validation errors", "error");
    // add error messages to form fields
    document.getElementById("error-title").textContent = validatResult.title
      ? validatResult.title
      : "";
    document.getElementById("error-price").textContent = validatResult.price
      ? validatResult.price
      : "";
    document.getElementById("error-imageurl").textContent =
      validatResult.imageUrl ? validatResult.imageUrl : "";
    document.getElementById("error-desc").textContent = validatResult.desc
      ? validatResult.desc
      : "";
    document.getElementById("error-old-price").textContent =
      validatResult.old_price ? validatResult.old_price : "";

    setTimeout(() => {
      document.getElementById("error-title").textContent = "";
      document.getElementById("error-price").textContent = "";
      document.getElementById("error-imageurl").textContent = "";
      document.getElementById("error-desc").textContent = "";
      document.getElementById("error-old-price").textContent = "";
    }, 4000);
    return;
  }

  // Product class instantiation
  const product = new Product(data);

  //   save to local storage
  const products = getItemsStore("products");

  // check if product already exist
  const productExist = products.find((p) => p.title == product.title);
  if (productExist) {
    //throw an error
    alertMsg("Product with title already exist");
    return;
  }

  //append the new product to the store existing products
  const newProductList = [...products, product];

  //save the new update back
  saveItemToStore("products", newProductList);
  //localStorage.setItem("products", JSON.stringify(newProductList));

  //succes message
  alertMsg("Product added successfully", "success");

  //   cleare product fields
  clearProductFields();

  //close modal
  closeModal(0);

  displayProducts();
}

function clearProductFields() {
  document.querySelector(".product-title").value = "";
  document.querySelector(".product-img").value = "";
  document.querySelector(".product-price").value = "";
  document.querySelector(".product-old_price").value = "";
  document.querySelector(".product-desc").value = "";
}

class Product {
  constructor({ title, price, old_price, imageUrl, desc }) {
    this.id = title + Math.random() * 1000000;
    this.title = title;
    this.price = +price;
    this.imgeUrl = imageUrl;
    this.old_price = old_price;
    this.desc = desc;
  }
}

function displayProducts() {
  document.getElementById("justtop").innerHTML = "";
  //get products from storage
  const products = getItemsStore("products");
  console.log(products);
  products.forEach((p) => {
    const wishlistbox = document.createElement("div");
    wishlistbox.className = "wishlistbox";

    const content = `
    <div class="topbox">
    <div class="topbox-img">
      <a href="#"><img src="./Exclusive Assets/Quick View.png" /></a>
    </div>

    <div class="wishlist-image">
      <img src=${p.imgeUrl} />
    </div>
  </div>
  <div class="addtocart cursor-pointer">
    <img class="tocart" src="./Exclusive Assets/Cart1.png" />
    <p class="tocart">Add to cart</p>
  </div>
  <div class="wishlistitems">
    <h4 class="title">${p.title}</h4>
    <div class="prices">
      <p>$${p.price}</p>
      <h5>${p.old_price ? `$${p.old_price}` : ""}</h5>
    </div>
    <ul>
      <li><img src="./Exclusive Assets/Vector (1).png" /></li>
      <li><img src="./Exclusive Assets/Vector (1).png" /></li>
      <li><img src="./Exclusive Assets/Vector (1).png" /></li>
      <li><img src="./Exclusive Assets/Vector (1).png" /></li>
      <li><img src="./Exclusive Assets/Vector (1).png" /></li>
      <li>(65)</li>
    </ul>
  </div>
    `;

    wishlistbox.innerHTML = content;

    const justtop = document.getElementById("justtop");
    justtop.appendChild(wishlistbox);
  });
}

function validate({ title, price, old_price, imageUrl, desc }) {
  console.log(+price);
  const errors = {};
  if (!title) {
    errors.title = "title is required";
  }

  if (+price == 0) {
    errors.price = "price must be a number greater than 0";
  }

  if (+old_price == 0) {
    errors.old_price = "old_price must be a number greater than 0";
  }

  const regex = /^https:\/\/[a-zA-Z0-9\W]+.png|.jpg|.jpeg|.svg$/gi;

  console.log(regex.test(imageUrl));
  if (!imageUrl) {
    errors.imageUrl = "image url is required";
  }

  if (!desc) {
    errors.desc = "desc is required";
  }
  console.log(errors);

  return errors;
}

function addToCartHandler(e) {
  console.log("cleicked");
  const parentElem = e.target.parentElement.parentElement;
  console.log(parentElem);
  const title = parentElem.querySelector(".title").textContent;
  console.log(title);

  // get the product to be added to cart from the store
  addProductToCart(title);
}

function addProductToCart(title) {
  //  get products from store
  const products = getItemsStore("products");

  // find the product with the title from the products
  const product = products.find((p) => p.title == title);

  console.log(product);

  const carts = getItemsStore("carts");

  //check that product is not already in cart
  const productExistInCart = carts.find((c) => c.title == title);
  if (productExistInCart) {
    alertMsg("product already in cart", "error");
    return;
  }
  const cartProduct = { ...product, qty: 1, subtotal: +product.price * 1 };

  const cartsUpdate = [...carts, cartProduct];

  //save to store
  saveItemToStore("carts", cartsUpdate);

  // load cart count
  displayCartCount();
}

async function saveImageToCloud(imageFile) {
  const formData = new FormData();
  formData.append("file", imageFile);
  formData.append("upload_preset", "commerce_files");

  const response = await fetch(
    `https://api.cloudinary.com/v1_1/dklrn1vdy/image/upload`,
    {
      method: "POST",
      body: formData,
    }
  );

  const data = await response.json();

  console.log(response, data);
  return data.secure_url;
}
