import { openModal, closeModal, alertMsg } from "./common.js";

if (document.readyState == "loading") {
  document.addEventListener("DOMContentLoaded", ready);
} else {
  ready();
}

function ready() {
  let addProductBtn = document.querySelector(".add-product-btn");
  addProductBtn.addEventListener("click", () => openModal(0));

  // Get the <span> element that closes the modal
  let closeProductModalBtn = document.getElementsByClassName("modal-close")[0];
  closeProductModalBtn.addEventListener("click", () => closeModal(0));

  //   add product
  const submitProductBtn = document.querySelector("#add-product-btn");
  submitProductBtn.addEventListener("click", addProductHandler);
}

function addProductHandler() {
  //collect form fields
  const title = document.querySelector(".product-title").value;
  const imageUrl = document.querySelector(".product-img").value;
  const price = document.querySelector(".product-price").value;
  const discount = document.querySelector(".product-discount").value;
  const desc = document.querySelector(".product-desc").value;

  //   validation

  const data = {
    title,
    price,
    discount,
    imageUrl,
    desc,
  };
  // Product class instantiation
  const product = new Product(data);

  //   save to local storage
  const products = localStorage.getItem("products")
    ? JSON.parse(localStorage.getItem("products"))
    : [];

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
  localStorage.setItem("products", JSON.stringify(newProductList));

  //succes message
  alertMsg("Product added successfully", "success");

  //   cleare product fields
  clearProductFields();

  //close modal
  closeModal(0);
}

function clearProductFields() {
  document.querySelector(".product-title").value = "";
  document.querySelector(".product-img").value = "";
  document.querySelector(".product-price").value = "";
  document.querySelector(".product-discount").value = "";
  document.querySelector(".product-desc").value = "";
}

class Product {
  constructor({ title, price, discount, imageUrl, desc }) {
    this.id = title + Math.random() * 1000000;
    this.title = title;
    this.price = +price;
    this.imgeUrl = imageUrl;
    this.discount = discount;
    this.desc = desc;
  }
}
