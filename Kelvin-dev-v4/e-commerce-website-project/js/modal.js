modalFunction("cartContainer", "navCartId", "navCartIdMobile", "cartClose");
modalFunction(
  "accountContainer",
  "user-icon",
  "user-icon-mobile",
  "accountClose"
);

function modalFunction(
  modalContainer,
  modalOpener,
  modalOpenerMobile,
  modalCloser
) {
  // get the modal body
  const modalBody = document.getElementById(`${modalContainer}`);
  console.log(modalBody);

  // get the open button
  const openModal = document.getElementById(`${modalOpener}`);
  // get the open button for mobile
  const openModalMobile = document.getElementById(`${modalOpenerMobile}`);
  //get the closer button
  const closeModal = document.getElementById(`${modalCloser}`);
  //function to open the modal
  openModal.onclick = function () {
    modalBody.style.display = "block";
  };
  // function to open the modal in mobile
  openModalMobile.onclick = function () {
    modalBody.style.display = "block";
  };
  //function to close modal
  closeModal.onclick = function () {
    modalBody.style.display = "none";
  };
}
