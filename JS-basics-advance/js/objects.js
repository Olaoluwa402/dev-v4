"use strict";
let a = 12;

function add(c, d = 0) {
  console.log(c, d);
  let b = 30;
  //   let a = 50;
  console.log(a, "a");
  console.log(b);

  function sub() {
    let g = 45;
    console.log(g);
    console.log(b);
  }
  //   console.log(g);
  //   sub();
}

// add(12, 40);

function gText() {
  var h = "john";
  let j = "james";
}
console.log(h, "h");
console.log(j, "j");

if (true) {
  var n = "nigeria";
  let p = "pap";
}

console.log(n);
console.log(p, "p");
