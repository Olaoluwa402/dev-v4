if (document.readyState === "loading") {
  document.addEventListener("click", ready);
} else {
  ready();
}

function ready() {
  //get tabs from query selector
  const tabs = document.querySelectorAll(".carousel_main");

  //get the next button from id
  const nextBtn = document.getElementById("next_btn");
  // console.log(nextBtn, "next");
  //add event listener to the next button class
  nextBtn.addEventListener("click", function () {
    next(tabs);
  });

  //get the previous button from id
  const prevBtn = document.getElementById("prev_btn");
  console.log(prevBtn, "previous");
  //add event listener to the previous button class
  prevBtn.addEventListener("click", function () {
    prev(tabs);
  });
}

let index = 0;

const next = (tabs) => {
  //initiate a removal of the class "active" from tab
  tabs[index].classList.remove("active");
  //increment the variable "index" that is connected to tabs
  index = (index + 1) % tabs.length;
  //initiate addition of the class "active" to tab
  tabs[index].classList.add("active");
};

const prev = (tabs) => {
  //initiate a removal of the class "active" from tab
  tabs[index].classList.remove("active");
  //increment the variable "index" that is connected to tabs
  index = (index - 1 + tabs.length) % tabs.length;
  //initiate addition of the class "active" to tab
  tabs[index].classList.add("active");
};
