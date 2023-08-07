// get the element
const menuBar = document.getElementById("menubar");

// set event listener
menuBar.addEventListener("click", function () {
  const sideBar = document.getElementById("sidebar");
  sideBar.classList.toggle("open");

  const banner = document.querySelector(".bannerText ");
  banner.classList.toggle("open");
});
