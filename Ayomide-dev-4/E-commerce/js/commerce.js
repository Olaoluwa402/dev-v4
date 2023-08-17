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

  let addProductBtn = document.querySelector(".add-product-btn");
  console.log(addProductBtn);
  addProductBtn.addEventListener("click", () => openModal(0));

  console.log(addProductBtn);

  let closeProductBtn = document.getElementsByClassName("close")[0];
  closeProductBtn.addEventListener("click", () => closeModal(0));

  console.log(closeProductBtn);
}

// // get modal
// let modal = document.getElementById("myModal");
// console.log(modal, "mmm");

// // get span that closes modal
// c
// //you forgot to add the join button
// const btn = document.getElementById("carty")[1];
// console.log(btn, 'ayo');

// btn.onclick = function () {
//   modal.style.display = "block";
//   console.log(modal);
// }; // When the user clicks the button, open the modal

// // When the user clicks on <span> (x), close the modal
// span.onclick = function () {
//   modal.style.display = "none";
// };

// // When the user clicks anywhere outside of the modal, close it
// window.onclick = function (event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// };
