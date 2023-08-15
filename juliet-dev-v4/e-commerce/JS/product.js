
import {
    openModal,
    closeModal,
    alertMsg,
    getItemsStore,
    saveItemToStore,
  } from "../JS/common.js";
  

if (document.readyState == "loading") {
    document.addEventListener("DOMContentLoaded", ready);
  } else {
    ready();
  }


function ready(){
    displayProducts();   //to display added product

  const openProductBtn = document.getElementById("myBtnn");
  openProductBtn.addEventListener("click",() => openModal(0));

  const  closeProductBtn = document.getElementsByClassName("close")[0];
  closeProductBtn.addEventListener("click",() => closeModal(0));

        //the submit button for adding product
  const submitProductBtn = document.querySelector("#add-product-btn");
  submitProductBtn.addEventListener("click", addProductHandler);


}



function addProductHandler() {
    //collect form fields
    const title = document.querySelector(".product-title").value;
    const imageUrl = document.querySelector(".product-img").value;
    const price = document.querySelector(".product-price").value;
    const old_price = document.querySelector(".product-old_price").value;
    const desc = document.querySelector(".product-desc").value;
    console.log(price);
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
      alertMsg("Form validation errors", "error"); //alert message imported from common.js
      // add error messages to form fields
      document.getElementById("error-title").textContent = validatResult.title
        ? validatResult.title       //? serves as atenary more like conditional statement
        : "";  // : serves as else 
      document.getElementById("error-price").textContent = validatResult.price
        ? validatResult.price
        : "";
      document.getElementById("error-imageurl").textContent =
        validatResult.imageUrl ? validatResult.imageUrl 
        : "";

      document.getElementById("error-desc").textContent = validatResult.desc
        ? validatResult.desc
        : "";

      document.getElementById("error-old-price").textContent =
        validatResult.old_price ? validatResult.old_price 
        : "";
  
      setTimeout(() => {
        document.getElementById("error-title").textContent = "";
        document.getElementById("error-price").textContent = "";
        document.getElementById("error-imageurl").textContent = "";
        document.getElementById("error-desc").textContent = "";
        document.getElementById("error-old-price").textContent = "";
      }, 4000);
      return;
    }
  
    // Product class instantiation more like creating new product
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
    document.getElementById("section2").innerHTML = "";
    //get products from storage
    const products = getItemsStore("products");
    console.log(12, products);
    products.forEach((p) => {
      const productbox = document.createElement("div");
      productbox.className = "product";


      const content = `
 
      <div class="pics">
        <img src="${p.imgeUrl}" />
        <div class="cart">
          <img src="./e-images/white-cart.svg" alt="" />
          <span>Add To Cart</span>
        </div>
        <div class="position">
          <button>-35%</button>
          <img src="./e-images/Ellipse 13.png" alt="" id="elipse" />
          <img src="./e-images/eye.svg" alt="" class="eye" />
        </div>
      </div>
      <div class="price">
        <p>${p.title}</p>
        <div class="dollar">
          <span>$${p.price}</span>
          <s>$${p.old_price ? `$${p.old_price}` : ""}</s>
        </div>
      </div>
      <div class="stars">
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <span>(65)</span>
      </div>`;
  
  
    productbox.innerHTML = content;
  
      const section2 = document.getElementById("section2");
      section2.appendChild(productbox);
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
  