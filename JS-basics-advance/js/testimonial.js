if (document.readyState === "loading") {
  document.addEventListener("click", ready);
} else {
  ready();
}

let index = 0;
const slides = document.querySelectorAll(".slide-container"); //returns Nodelist []
function ready() {
  const nextBtn = document.getElementById("next");
  nextBtn.addEventListener("click", next);
  const prevBtn = document.getElementById("prev");
  prevBtn.addEventListener("click", prev);
}

function next() {
  slides[index].classList.remove("active");
  index = (index + 1) % slides.length;
  console.log(index, "index");
  slides[index].classList.add("active");
}

function prev() {
  slides[index].classList.remove("active");
  index = (index - 1 + slides.length) % slides.length;
  slides[index].classList.add("active");
}
