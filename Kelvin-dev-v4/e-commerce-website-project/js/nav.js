const menuButton = document.getElementById("hamburger-icon");

const mobileNav = document.getElementById("mobilenav");

menuButton.addEventListener("click", () => {
  // console.log(mobileNav);
  // console.log(menuButton);

  mobileNav.classList.toggle("menushow");
});

window.onclick = function (event) {
  if (
    !event.target.matches("#hamburger-icon") &&
    !event.target.matches("#mobilenav").innerHTML()
  ) {
    if (mobileNav.classList.contains("menushow")) {
      mobileNav.classList.remove("menushow");
      mobileNav.classList.add("menuclose");
    }
  }
};
