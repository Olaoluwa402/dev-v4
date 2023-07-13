if (document.readyState === "loading") {
    document.addEventListener("click", ready);
  } else {
    ready();
  }
  
  let index = 0;
  function ready() {
    const slides = document.querySelectorAll(".outter-inner"); //returns Nodelist []
    const nextBtn = document.getElementById("arrow2");
    nextBtn.addEventListener("click", function () {
        // alert("Check it");
        arrow2(slides);
    });
    const prevBtn = document.getElementById("arrow1");
    prevBtn.addEventListener("click", function () {
      arrow1(slides);
    });
  }
  
  function arrow2(slides) {
    slides[index].classList.remove("active");
    index = (index + 1) % slides.length;
    slides[index].classList.add("active");
  }
  
  function arrow1(slides) {
    slides[index].classList.remove("active");
    index = (index - 1 + slides.length) % slides.length;
    slides[index].classList.add("active");
  }