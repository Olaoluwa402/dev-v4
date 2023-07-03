const menuBar = document.getElementById("hamburger-menu");

menuBar.addEventListener("click", function () {
    const sideBar = document.getElementById("side-nav");
    sideBar.classList.add("open");
});

const closeBar = document.getElementById("closer")

closeBar.addEventListener("click" , function () {
    const sideBar = document.getElementsByClassName("side-nav")[0];
    sideBar.classList.remove("open");
});