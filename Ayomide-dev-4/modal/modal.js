// get modal
var modal = document.getElementById("myModal");

// get span that closes modal
var span = document.getElementsByClassName("close") [0]

//you forgot to add the join button
const btn = document.getElementsByClassName("join")[0]

btn.onclick = function () {
  modal.style.display = "block";
}; // When the user clicks the button, open the modal

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
