// empty array  using arrayy class constructor
const arr = new Array();
console.log(arr, "array");

// shortcut to creating array
const arr_2 = [];

// array with values

const arr_3 = [1, 2, 3, 4];

const arr_4 = [
  "john",
  500,
  { country: "Nigeria", city: "Lagos" },
  { skills: ["HTML", "CSS", "JS", "JAVA", "PYTHON"] },
];

const p = arr_4[3].skills[4];
console.log(p, "p");

// modify an array

arr_4[0] = 3000;

arr_4[3] = [];
console.log(arr_4, "arr_4");

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

// Array methods

//1. fill
let fillArray = Array(5).fill("Y");
console.log(fillArray);

// 2. length - get the length of the array
let len = fillArray.length;
console.log(len, "len");

// indexOf
let indexOfData = [1, 2, 3, 4, 5];
const index = indexOfData.indexOf(6);

console.log(index, "index");

// isArray

// calculate the total sum of the inner array, if no inner array, return zero
const isArrayData_1 = [1, 2, 3, 4, [5, 6, 7, 8, 9, 10], 5];
const isArrayData_2 = [1, 2, 3, 4, 4, 5, 10, [5, 6, 7, 8, 9, 10, 10]];

function sumInnerArray(arr) {
  if (!Array.isArray(arr)) return "Please supply an array";
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    const current = arr[i];
    if (Array.isArray(current)) {
      console.log(current, "array");
      for (let j = 0; j < current.length; j++) {
        const innerArrCurrent = current[j];
        sum = sum + innerArrCurrent;
      }
      return sum;
    }
  }
  return 0;
}

console.log(sumInnerArray([1, 2, 3]), "sum");

const joinData = ["john", "sayo", "moyo", "dayo"]; // "john-sayo"
const joinResult = joinData.join("-");
console.log(joinResult);

let newArr = [];
for (let i = 0; i < joinData.length; i++) {
  const current = joinData[i];

  if (current.charAt(current.length - 1) === "o") {
    newArr.push(current);
  }
}

console.log(newArr.join("-"));

// slice

const sliceData = [1, 3, 5, 6, 8, 10, 9, 70];

//return 8,10,9
//return 1,3,5,6,8,10,9,70
//70

console.log(sliceData.slice(0, sliceData.length)); //1,3,5,6,8,10,9,70
console.log(sliceData.slice(4, 7));
console.log(sliceData.slice(sliceData.length - 1, sliceData.length));

// make an api call to get list of photos and return the first 20 only
async function get20Photos() {
  const url = "https://jsonplaceholder.typicode.com/photos";

  const { data } = await axios.get(url);
  console.log(data.slice(0, 21));
  return data.slice(0, 20);
}

// get20Photos();

// splice
const spliceData = [1, 2, 3, 4, 5];
console.log(spliceData, "originaData");
// const cut = spliceData.splice(); //[]
// const cut = spliceData.splice(0); //[1, 2, 3, 4, 5]
// const cut = spliceData.splice(0,1); //[1]
// const cut = spliceData.splice(0, 2); //[1, 2]
const cut = spliceData.splice(0, 2, 7, 7); //[1, 2]
console.log(spliceData, "originaDataAfterCut");
console.log(cut, "cut");

//replace 789 in the data with John, James and Bayo
const textData = [3, 5, 9, 7, 8, 9];

const cut_2 = textData.splice(3, 3, "John", "James", "Bayo");

console.log(cut_2, "cut_2");

textData.push(cut_2);

console.log(textData);

// reverse

// convert the following to as string and in reverse order
//1,2,3,4,5,10,11,12,13
const reverseData_1 = [10, 11, 12, 13];
const reverseData_2 = [1, 2, 3, 4, 5];

// sort  - rearrage an array list in ascending order
const sortData = ["HTML", "PYTHON", "CSS", "JS", "JAVA"];

const sorted = sortData.sort().reverse();
console.log(sorted, "sorted");

// array of array or nested array or 2D/3D arrays
// 1D array
const oneD = ["HTML", "PYTHON", "CSS", "JS", "JAVA"];
//  accessing the value
console.log(oneD[1]);
// twoD
const twoD = [
  ["PYTHON", "JAVA"],
  ["CSS", "JS", "HTML"],
];
//  accessing the value
console.log(oneD[1][2]);
//three D
const threeD = [
  ["PYTHON", "JAVA", "NODEJS"],
  ["CSS", "JS", "HTML", ["REACT", "ANGULAR", "VUE"]],
];
//  accessing the value
console.log(threeD[1][3][1]);
