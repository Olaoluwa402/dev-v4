// primitive data types

const { log } = console;

//strings
let stringData_1 = "John";
let stringData_2 = "Juliet";
let stringAddition = stringData_1 + " " + stringData_2;
let stringData_3 = `My full name is ${stringData_1} ${stringData_2}`;
console.log(stringData_3, "data");

console.log(typeof stringData_1);

// number - intergers and floats
const numData_1 = 20; //integer
const numData_2 = 20.99; //float
const numData_3 = "30"; //string and not number
console.log(typeof numData_2);

// boolean - true or false
let boolData_1 = true;
let boolData_2 = false;
console.log(typeof boolData_1);

//undefined - a variable declared without assigning a value
let undefinedData;
console.log(typeof undefinedData);

//null - empty or no value
let nullData = null;
console.log(typeof nullData);

// non primitive data types

// cannot be mutated
let numArray_1 = [1, 2, 3, 4, 5];
let numArray_2 = [1, 2, 3, 4, 5];

let objData = { name: "john" };
let objDat_2 = { name: "john" };
log(objData == objDat_2, "objDAta");
console.log(numArray_1 == numArray_2, "numArray");

let objData_3 = objData;

log(objData_3 == objData, "objRef");

const javascriptClass = {
  joseph: {
    name: "john",
  },
  quadri: {
    name: "john",
  },
};

let numString = "30";
let toNum_1 = Number(numString);
let toNum_2 = parseFloat("30.99");
let toNum_3 = parseInt("77");
let toNum_4 = +numString;

log(typeof toNum_1, "toNum");

let toStringData = toString(toNum);
log(typeof toStringData);
