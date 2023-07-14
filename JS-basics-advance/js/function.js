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
