if (document.readyState === "loading") {
    document.addEventListener("click", ready);
} else {
    ready();
  }
  
  
  const slides = document.getElementsByClassName("innercontainer"); //returns Nodelist []
  let index = 0;
  function ready() {
    const nextBtn = document.getElementById("next");
    nextBtn.addEventListener("click" , next)
    const prevBtn = document.getElementById("prev");
    prevBtn.addEventListener("click" , prev);
  }
  
  function next() {
    console.log(slides)
    slides[index].classList.remove("Active");
    index = (index + 1) % slides.length;
    console.log(index, "index");
    slides[index].classList.add("Active");
  }
  
  function prev() {
    console.log(slides)
    slides[index].classList.remove("Active");
    index = (index - 1 + slides.length) % slides.length;
    slides[index].classList.add("Active");
  }