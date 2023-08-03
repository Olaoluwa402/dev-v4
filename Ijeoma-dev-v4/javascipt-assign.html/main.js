if (document.readyState === "loading") {
  document.addEventListener("click", ready);
} else {
  ready();
}

let index = 0;
const slides = document.querySelectorAll(".content2"); //returns Nodelist []

function ready() {
  const nextBtn = document.getElementById("angle1");
  nextBtn.addEventListener("click", angle1);
  const prevBtn = document.getElementById("angle2");
  // console.log(prevBtn);
  prevBtn.addEventListener("click", angle2);
}

function angle1() {
  slides[index].classList.remove("active");
  index = (index + 1) % slides.length;
  console.log(index, "index");
  slides[index].classList.add("active");
}

function angle2() {
  slides[index].classList.remove("active");
  index = (index - 1 + slides.length) % slides.length;
  slides[index].classList.add("active");
}
