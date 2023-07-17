// function
const { log } = console;
// function with no parameter
function add() {
  const a = 12;
  const b = 13;
  const sum = a + b;
  return sum;
}

// log(add());

function sqr(num) {
  const sqr = num ** 2;
  return sqr;
}

log(sqr(add()));

// function with two or more parameters
function product(n1, n2) {
  return n1 * n2;
}

log(product(5, 10));
// unlimited parameters

// using normal function
function sumAll() {
  // log(arguments);
  let sum = 0;
  for (let i = 0; i < arguments.length; i++) {
    sum = sum + arguments[i];
  }
  return sum;
}

// using arrow function
const sumEvery = (...nums) => {
  log(nums);
};

log(sumEvery(2, 3, 7, 8, [6, 8]));
// log(sumAll(2, 3, 7, 8));
// log(sumAll(2, 3, 7, 8, 10, 12, 13));

// setting default parameter
function defaultParam(name = "Guest") {
  return name;
}

// log(defaultParam("Bayo"));

//anonymous function - nameless function
const exponent = function (defaultParam) {
  log(defaultParam);
};
exponent("Javascript");

// Exercise: write a anonymous function that calculate the perimeter of a circle 2pir
const circlePerimeter = function (r) {
  return Math.ceil(2 * Math.PI * r);
};

const result = circlePerimeter(14);
log(result);

function Outer() {
  //anonymous function
  return function () {
    return 2;
  };
}

// log(Outer());

// anonymous function in object
const Person = {
  fullName: function () {
    return "john bayo";
  },
};

// self Invoked fucntion

// without argument
log(
  (function () {
    return "john bayo";
  })()
);

// with argument
log(
  (function (n, y) {
    return n * y;
  })(10, 5)
);

// arraow function

log(arrowFunc(5)); // no error because of JS hoisting
function arrowFunc(n) {
  return;
}

//log(arrowFunc(5)); //  error occurs because it's an arrow function. No hoisting
// const arrowFunc = (n) => n * 4;
