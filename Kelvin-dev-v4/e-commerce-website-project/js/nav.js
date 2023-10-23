const menuButton = document.getElementById("hamburger-icon");

const mobileNav = document.getElementById("mobilenav");

menuButton.addEventListener("click", () => {
  // console.log(mobileNav);
  // console.log(menuButton);

  mobileNav.classList.toggle("menushow");
});
