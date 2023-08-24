import { openModal, closeModal } from "../JS/common.js";

// console.log(openModal, closeModal);


if (document.readyState == "loading") {
  document.addEventListener("DOMContentLoaded", ready);
} else {
  ready();
}

function ready(){
  const openCartBtn = document.getElementById("myBtn");
  openCartBtn.addEventListener("click",() => openModal(1));

  const closeCartBtn = document.getElementsByClassName("close")[1];
  closeCartBtn.addEventListener("click",() => closeModal(1));
}



