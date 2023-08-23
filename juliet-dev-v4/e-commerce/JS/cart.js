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
    let buyCartBtn = document.getElementById("myBtn");
    buyCartBtn.addEventListener("click", cartHandler);
  
    // Get the <span> element that closes the modal
    let closecartModalBtn = document.getElementsByClassName("close")[1];
    closecartModalBtn.addEventListener("click", () => closeModal(1));
  }
  
  function cartHandler() {
    //console.log(cartHandler);
  
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
    document.getElementById("cart_body").innerHTML = "";
    //tbody.appendChild(cartElemRow);
    carts.forEach((product) => {
      const cartElemRow = document.createElement("div");

      const content = `
      <div class="selected-items">
      <div class="inner">
        <img src="${product.imgeUrl}/>
        <div class="cancel">
          <img src="./e-images/icon-cancel.svg" alt="" id="cancel" />
        </div>
        <p class="cart-title">${product.title}</p>
      </div>
      <p>$${product.price}</p>
      <input
        type="number"
        id="numberSelector"
        name="numberSelector"
        min="0"
        max="100"
        value="${product.qty}" class= "updateQty"
      />
      <p>$${product.subtotal}</p>
    </div>
     `;

      cartElemRow.innerHTML = content;
  
      const tbody = document.getElementById("cart_body");
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
  

  export {displayCartItems, displayCartTotalDetail}