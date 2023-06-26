// numbers - interger and float

console.log(Math);
const pi = Math.PI; //3.1423
// Math round
const numRound = Math.round(pi);

console.log(numRound, "numRound");

// math floor
const numFloor = Math.floor(3.9);

console.log(numFloor, "numFloor");

// math ceil
const numCeil = Math.ceil(3.5);

console.log(numCeil, "numCeil");

const numSQR = Math.sqrt(16);

console.log(numSQR, "numSQR");

const numPow = Math.pow(3, 3);
console.log(numPow, "poer");

const num = [1, 2, 8, 9, 4, 5, 2, 3];

const min = Math.min(...num);

const max = Math.max(...num);

console.log(min, max, "minmax");

// math random - generate random number btw 0 and 1 but never 1
const numRandom = Math.random();

console.log(numRandom, "numROund");

// random number btw 1000 and 2000

const numRandomSixDigitWholeNumber = Math.round(numRandom * 1000000);
console.log(numRandomSixDigitWholeNumber, "numRandomSixDigit");
