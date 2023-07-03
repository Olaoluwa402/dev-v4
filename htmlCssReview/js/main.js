// get the elment
const menuBar = document.getElementById("menubar");

// set event listener
menuBar.addEventListener("click", function () {
  const sideBar = document.getElementById("sidebar");
  sideBar.classList.toggle("open");
});
