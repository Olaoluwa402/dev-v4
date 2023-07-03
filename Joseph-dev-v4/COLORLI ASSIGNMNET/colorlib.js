// get the elment
const menuBar = document.getElementById("nav-menu-bar");

// set event listener
menuBar.addEventListener("click", function () {
   //alert('fghfgghg')

  const sideBar = document.getElementById("sidebar");
  sideBar.classList.add("open");
});

const closeBar = document.getElementById("close-bar");

closeBar.addEventListener("click", function () {
    const sideBar = document.getElementById("sidebar");
    sideBar.classList.remove("open");
});