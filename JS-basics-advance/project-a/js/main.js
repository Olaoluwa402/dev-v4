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
}

function openSideBar() {
  const sideBar = document.getElementById("sidebar");
  console.log(sideBar);
  sideBar.classList.toggle("open");
}
