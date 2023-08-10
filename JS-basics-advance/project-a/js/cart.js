import {
  openModal,
  closeModal,
  alertMsg,
  getItemsStore,
  saveItemToStore,
  displayCartCount,
} from "./common.js";

if (document.readyState == "loading") {
  document.addEventListener("DOMContentLoaded", ready);
} else {
  ready();
}

function ready() {
  // Get the button that opens the modal
  let buyCartBtn = document.getElementById("buy-cart");
  buyCartBtn.addEventListener("click", cartHandler);

  // Get the <span> element that closes the modal
  let closecartModalBtn = document.getElementsByClassName("modal-close")[1];
  closecartModalBtn.addEventListener("click", () => closeModal(1));
}

function cartHandler() {
  console.log(cartHandler);

  // get all cart items
  const carts = getItemsStore("carts");

  //   display cart items
  displayCartItems(carts);

  //cart totla details
  displayCartTotalDetail();

  //open modal
  openModal(1);
}

function displayCartItems(carts) {
  carts.forEach((product) => {
    const cartElemRow = document.createElement("tr");
    const content = `
   <td class="product-data">
            <img
              src=${product.imgeUrl}
              width="54px"
              height="54px"
            />
            <p>${product.title}</p>
          </td>
          <td>$${product.price}</td>
          <td>
            <input type="number" value=${product.qty} min="01" max="100" />
          </td>
          <td>$${product.subtotal}</td>`;

    cartElemRow.innerHTML = content;

    const tbody = document.getElementById("cartBody");
    tbody.appendChild(cartElemRow);
  });
}

function displayCartTotalDetail() {
  const carts = getItemsStore("carts");
  const subTotal = carts
    .map((p) => p.price * p.qty)
    .reduce((acc, curr) => acc + curr, 0)
    .toFixed(2);
  const shipping = 0;
  const total = +subTotal + shipping;

  document.querySelector(".cart-subtotal").textContent = subTotal;
  document.querySelector(".cart-total").textContent = total.toFixed(2);
}
