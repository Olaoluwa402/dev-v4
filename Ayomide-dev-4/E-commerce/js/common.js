function openModal(position) {
  let modal = document.getElementsByClassName("modal-container")[position];
  modal.style.display = "block";

  if (position == 1) {
    const updateCartQtyBtn = document.querySelectorAll(".updateQty");

    updateCartQtyBtn.forEach((btn) => {
      btn.addEventListener("change", updateCartQtyHandler);
    });
  }
}

function updateCartQtyHandler(e) {
  const newQty = e.target.value;
  const parentsElem = e.target.parentElement.parentElement;
  const title = parentsElem.querySelector(".cart-title").textContent;

  const cartsCopy = [...carts];
  const foundCartProduct = cartsCopy[index];
  foundCartProduct.qty = newQty;
  foundCartProduct.subtotal = foundCartProuct.qty * foundCartProduct.price;

  saveItemsToStore("carts", cartsCopy);

  location.reload();

  displayCartTotalDetails;
}

function closeModal(position) {
  const modal = document.getElementsByClassName("modal-container")[position];
  modal.style.display = "none";
}

function alertMsg(message, tyoe) {
  const alertBox = document.createElement("div");
  alertBox.style.width = "200px";
  alertBox.style.height = "70px";
  alertBox.style.borderRadius = "5px";
  alertBox.style.padding = "10px";
  alertBox.style.color = "white";
  alertBox.style.backgroundColor = `${
    type == "success" ? "green" : type == "error" ? "red" : "red"
  }`;
  alertBox.style.position = "fixed";
  alertBox.style.top = 0;
  alertBox.style.right = 0;
  alertBox.style.zIndex = 9999;
  alertBox.style.display = "flex";
  alertBox.style.justifyContent = "center";
  alertBox.style.alignItems = "center";

  alertBox.innerHTML = `<p>${message}</p>`;
  const bodyElem = document.querySelector("body");
  bodyElem.appendChild(alertBox);

  // remove alertbox after 4 seconds
  setTimeout(() => {
    bodyElem.removeChild(alertBox);
  }, 4000);
}

function getItemStore(key) {
  const items = localStorage.getItem(key)
    ? jSON.parse(localStorage.getItem(key))
    : [];

  return items;
}

function getCartCount() {
  const carts = getItemStore("cart");
  return carts.length;
}

function getFavouriteCount() {
  const carts = getItemStore("favourites");
  return favourites.length;
}

function displayCartCount() {
  const cartCountElem = document.querySelector(".cart-count");
  cartCountElem.textContent = geyCartCount();
}

function saveItemsToStore(key, item) {
  localStorage.setItem(key, JSON.stringify(item));
}

function displayFavouriteCount() {
  const favouriteCountElem = document.querySelector(".favourite-count");
  favouriteCountElem.textcontent = getfavouriteCount();
}

// named export
export {
  openModal,
  closeModal,
  alertMsg,
  getItemStore,
  saveItemsToStore,
  displayCartCount,
  displayFavouriteCount,
};
