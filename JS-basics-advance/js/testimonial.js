if (document.readyState === "loading") {
  document.addEventListener("click", ready);
} else {
  ready();
}

let index = 0;
function ready() {
  const slides = document.querySelectorAll(".slide-container"); //returns Nodelist []
  const nextBtn = document.getElementById("next");
  nextBtn.addEventListener("click", function () {
    next(slides);
  });
  const prevBtn = document.getElementById("next");
  prevBtn.addEventListener("click", function () {
    prev(slides);
  });
}

function next(slides) {
  slides[index].classList.remove("active");
  index = (index + 1) % slides.length;
  slides[index].classList.add("active");
}

function prev(slides) {
  slides[index].classList.remove("active");
  index = (index - 1 + slides.length) % slides.length;
  slides[index].classList.add("active");
}
