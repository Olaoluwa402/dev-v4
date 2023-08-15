import { displayCartTotalDetail, displayCartItems } from "./cart.js";
function openModal(position) {
  let modal = document.getElementsByClassName("modal-container")[position];
  modal.style.display = "block";

  if (position == 1) {
    // increment/decrement event
    const updateCartQtyBtn = document.querySelectorAll(".updateQty");

    updateCartQtyBtn.forEach((btn) => {
      btn.addEventListener("change", updateCartQtyHandler);
    });
  }
}

function updateCartQtyHandler(e) {
  const newQty = e.target.value;
  const parentElem = e.target.parentElement.parentElement;
  const title = parentElem.querySelector(".cart-title").textContent;

  const carts = getItemsStore("carts");
  const index = carts.findIndex((p) => p.title == title);

  const cartsCopy = [...carts];
  //update cart with the new change
  const foundCartProduct = cartsCopy[index];
  foundCartProduct.qty = newQty;
  foundCartProduct.subtotal = foundCartProduct.qty * foundCartProduct.price;

  console.log(cartsCopy);

  saveItemToStore("carts", cartsCopy);

  //display carts
  location.reload();
  //displayCartItems(cartsCopy);

  //update cart totlas
  displayCartTotalDetail();
}

function closeModal(position) {
  // const index = modals.findIndex('')
  let modal = document.getElementsByClassName("modal-container")[position];
  modal.style.display = "none";
}

//alert mesages fucntion
function alertMsg(message, type) {
  const alertBox = document.createElement("div");
  alertBox.style.width = "200px";
  alertBox.style.height = "80px";
  alertBox.style.borderRadius = "6px";
  alertBox.style.padding = "10px";
  alertBox.style.color = "#fff";
  alertBox.style.backgroundColor = `${
    type == "success" ? "green" : type == "error" ? "brown" : "brown"
  }`;

  alertBox.style.position = "fixed";
  alertBox.style.top = 0;
  alertBox.style.right = 0;
  alertBox.style.zIndex = 99999;
  alertBox.style.display = "flex";
  alertBox.style.justifyContent = "center";
  alertBox.style.alignItems = "center";

  alertBox.innerHTML = `<p> ${message} </p>`;

  const bodyElem = document.querySelector("body");

  bodyElem.appendChild(alertBox);

  //remove aletbox after 4 seconds
  setTimeout(() => {
    bodyElem.removeChild(alertBox);
  }, 4000);
}

function getItemsStore(key) {
  const items = localStorage.getItem(key)
    ? JSON.parse(localStorage.getItem(key))
    : [];

  return items;
}

function getCartCount() {
  const carts = getItemsStore("carts");
  return carts.length;
}

function displayCartCount() {
  const cartCountElem = document.querySelector(".cart-count");
  cartCountElem.textContent = getCartCount();
}

function saveItemToStore(key, item) {
  localStorage.setItem(key, JSON.stringify(item));
}

export {
  openModal,
  closeModal,
  alertMsg,
  getItemsStore,
  saveItemToStore,
  displayCartCount,
}; //named export
