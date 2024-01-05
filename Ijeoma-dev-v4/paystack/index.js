var sliderTrigger = document.getElementsByClassName("slider-trigger")[0];
var slider = document.getElementsByClassName('slider-parent')[0];
sliderTrigger.addEventListener( "click" , function(el){
if(slider.classList.contains("active")){
  slider.classList.remove("active");
 }else{
  slider.classList.add("active");
 }
});



// window.onscroll = function() {myFunction()};

// var navbar = document.getElementById("header");
// var sticky = navbar.offsetTop;

// function myFunction() {
//   if (window.pageYOffset >= sticky) {
//     navbar.classList.add("sticky")
//   } else {
//     navbar.classList.remove("sticky");
//   }
// }


// // get the elment
// const menuBar = document.getElementById("menubar");

// // set event listener
// menuBar.addEventListener("click", function () {
//   const sideBar = document.getElementById("sidebar");
//   sideBar.classList.toggle("open");
// });
// const ass = {
//     friends: [
//         {
//             name: "john",
//             skills: ["JS", "HTML", "CSS"],
//         },
//         {
//             name: "Dayo",
//             skills: ["JS", "HTML"],
//         },
//     ],
// };
// const arr_5 = ass.friends[0].skills[2];
// console.log(arr_5);

