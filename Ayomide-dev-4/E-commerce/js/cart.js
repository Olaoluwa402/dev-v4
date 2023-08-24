import {
  openModal,
  closeModal,
  alertMsg,
  getItemStore,
  saveItemsToStore,
  displayCartCount,
  displayFavouriteCount,
} from "../js/common.js";

if (document.readyState == "loading") {
  document.addEventListener("DOMContentLoaded", ready);
} else {
  ready();
}

function ready() {
  // displayCartCount();
  // displayProducts();

  let addProductBtn = document.querySelector(".piccart");
  console.log(addProductBtn);
  addProductBtn.addEventListener("click", () => openModal(1));

  console.log(addProductBtn);

  let closeProductBtn = document.getElementsByClassName("close")[1];
  closeProductBtn.addEventListener("click", () => closeModal(1));

  console.log(closeProductBtn);
}
