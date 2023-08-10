import { openModal, closeModal } from "./common.js";

console.log(openModal, closeModal);
if (document.readyState == "loading") {
  document.addEventListener("DOMContentLoaded", ready);
} else {
  ready();
}

function ready() {
  // get the elment
  const menuBar = document.getElementById("menubar");
  menuBar.addEventListener("click", openSideBar);

  // Get the button that opens the modal
  let buyCartBtn = document.getElementById("buy-cart");
  buyCartBtn.addEventListener("click", () => openModal(1));

  // Get the <span> element that closes the modal
  let closecartModalBtn = document.getElementsByClassName("modal-close")[1];
  closecartModalBtn.addEventListener("click", () => closeModal(1));
}

function openSideBar() {
  const sideBar = document.getElementById("sidebar");
  console.log(sideBar);
  sideBar.classList.toggle("open");
}