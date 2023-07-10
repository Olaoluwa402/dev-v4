
const menubar = document.querySelector(".menubar");
const lists = document.querySelector(".list");


menubar.addEventListener('click', function(){
    lists.classList.toggle("open");
});

// // get the elment
// const menuBar = document.getElementById("menubar");

// // set event listener
// menuBar.addEventListener("click", function () {
//   const sideBar = document.getElementById("sidebar");
//   sideBar.classList.toggle("open");
// });
const ass = {
    friends: [
        {
            name: "john",
            skills: ["JS", "HTML", "CSS"],
        },
        {
            name: "Dayo",
            skills: ["JS", "HTML"],
        },
    ],
};
const arr_5 = ass.friends[0].skills[2];
console.log(arr_5);

