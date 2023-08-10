// Get the modal
var modall = document.getElementById("product");

// Get the button that opens the modal
var btn11 = document.getElementById("modal-container");

// Get the <span> element that closes the modal
var span1 = document.getElementsByClassName("modal-close")[1];

// When the user clicks the button, open the modal
btn11.onclick = function () {
  modall.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span1.onclick = function () {
  modall.style.display = "none";
};



console.log(btn11, span1);
if (document.readyState == "loading") {
  document.addEventListener("DOMContentLoaded", ready);
} else {
  ready();
}

function ready() {
  // get the elment
  const menuBar = document.getElementById("product");
  menuBar.addEventListener("click", openSideBar);

  // Get the button that opens the modal
  let buyCartBtn = document.getElementById("buy-cart");
  buyCartBtn.addEventListener("click", () => btn11(1));

  // Get the <span> element that closes the modal
  let closecartModalBtn = document.getElementsByClassName("modal-close")[0];
  closecartModalBtn.addEventListener("click", () => span1(1));
}

function openSideBar() {
  const sideBar = document.getElementById("sidebar");
  console.log(sideBar);
  sideBar.classList.toggle("btn11");
}

// function addProductHandler() {}
