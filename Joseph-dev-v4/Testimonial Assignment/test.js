if (document.readyState === "loading") {
    document.addEventListener("click", ready);
  } else {
    ready();
  }
  
  let index = 0;
  const slides = document.querySelectorAll(".outter-inner"); //returns Nodelist []
  function ready() {
    const nextBtn = document.getElementById("arrow2");
    nextBtn.addEventListener("click", arrow2);
        // alert("Check it");
    const prevBtn = document.getElementById("arrow1");
    prevBtn.addEventListener("click", arrow1);
  }
  
  function arrow2() {
    slides[index].classList.remove("active");
    index = (index + 1) % slides.length;
    slides[index].classList.add("active");
  }
  
  function arrow1() {
    slides[index].classList.remove("active");
    index = (index - 1 + slides.length) % slides.length;
    slides[index].classList.add("active");
  }