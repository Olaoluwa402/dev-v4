

// get the elment
const menuBar = document.getElementById("menubar");
const sideBar = document.getElementById("sidebar");

// set event listener
menuBar.addEventListener("click", function () {
  // alert('Alert Message')
 
  console.log(sideBar)
  sideBar.classList.toggle("open")
});

console.log(sideBar)



// Get the modal
let modal = document.getElementsByClassName("modal-container")[0];
console.log(modal);

// Get the button that opens the modal
let btn = document.getElementById("buy-cart");

// alert(Test);

// Get the <span> element that closes the modal
let span = document.getElementsByClassName("modal-close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// }