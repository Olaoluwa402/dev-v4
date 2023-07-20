// get the modal body
const modalBody = document.getElementById("formsection");
console.log(modalBody, "l");

// get the open button
const openModal = document.getElementById("loginbtn");
console.log(openModal, "k");

const closeModal = document.getElementById("closer");

openModal.onclick = function () {
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
