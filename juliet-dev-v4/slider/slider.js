if (document.readyState === "loading") {
  document.addEventListener("click", ready);
} else {
  ready();
}

let index = 0;
const box = document.querySelectorAll(".outer-box");
function ready() {
  const nextBtn = document.getElementById("next");
  nextBtn.addEventListener("click", function () {
  });

  const prevBtn = document.getElementById("prev");
  prevBtn.addEventListener("click", function () {
    prev(box);
  });
}

function next() {

  box[index].classList.remove("active");
  index = (index + 1) % box.length;
  console.log('index is ', index)
  box[index].classList.add("active");
}

function prev() {
  box[index].classList.remove("active");
  index = (index - 1 + box.length) % box.length;
  box[index].classList.add("active");
}


// Taiwo code
// const box = document.querySelectorAll('.outer-box');
// const nextBtn = document.getElementById('next');
// const prevBtn = document.getElementById('prev');

// let index = 0

// nextBtn.addEventListener('click', next)
// prevBtn.addEventListener('click', prev)

// function next(){
//   if(index < box.length - 1){
//     box[index].classList.remove('active');
//     index++;
//     box[index].classList.add('active');
//   } else {
//     box[index].classList.remove('active');
//     index = 0
//     box[index].classList.add('active');
//   }
// }

// let count = 1 // 3
// function prev(){
//   if(index < box.length && index >= 0){
//     box[index].classList.remove('active');
//     index = box.length - count; //1
//     count++;
//     // box[index].classList.add('active')
//     console.log(index) // 1
//   }
// }



// const box = document.querySelectorAll('.outer-box');
// const nextBtn = document.getElementById('next');
// const prevBtn = document.getElementById('prev');

// let index = 0

// function next(box) {

//   box[index].classList.remove("active");
//   index = (index + 1) % box.length;
//   console.log('index is ', index)
//   box[index].classList.add("active");
// }

// function prev(box) {
//   box[index].classList.remove("active");
//   index = (index - 1 + box.length) % box.length;
//   box[index].classList.add("active");
// }

