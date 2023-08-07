// get the modal body
const modalBody = document.getElementById("modal-container");
console.log(modalBody, "l");

// get the open button
const openModal = document.getElementById("nav-cart-id");
console.log(openModal, "k");

const openModalMobile = document.getElementById("nav-cart-id-mobile");

const closeModal = document.getElementById("modalclose");

openModal.onclick = function () {
  modalBody.style.display = "block";
};

openModalMobile.onclick = function () {
  modalBody.style.display = "block";
};

closeModal.onclick = function () {
  modalBody.style.display = "none";
};
// create a function that uses the button on the modal
// openModal.addEventListener("click", function () {
//   console.log(modalBody);
//   modalBody.style.display = "block";
// });

// function openClick() {}
