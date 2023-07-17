// set
const { log } = console;
// create an empty set
const emptySet = new Set(); //set class instantiation
log(emptySet);

const list = ["javascript", "java", "python", "javascript", "java"];

// add items to a set
// const uniqueSetFromList = new Set(list);
// console.log(uniqueSetFromList);

// const uniqueList = [...uniqueSetFromList];

// console.log(uniqueList, "unique");

// const selectContainer = document.getElementsByClassName("select-container")[0];

// const select = document.createElement("select");
// select.id = "courses";
// select.name = "courses";

// selectContainer.appendChild(select);

// const selectEle = document.getElementById("courses");

// log(selectEle, "selectEle");

// for (let i = 0; i < uniqueList.length; i++) {
//   const current = list[i];
//   const option = document.createElement("option");
//   option.value = `${current}`;
//   option.innerText = `${current}`;

//   selectEle.appendChild(option);
// }

// use set on the array below
const arr = ["mango", "orange", "mango", "apple", "apple", "carrot"];

// get unique set using set on the array
//get unique array from the unique set using the two methods ( ... and for of loop)

//set methods and properties
const list2 = ["javascript", "java", "python", "javascript", "java"];
const addData = new Set(list2);

// add() method
addData.add("app");
addData.add("app2");
addData.add("app3");

console.log(addData, addData.size);

// delete
const setArr = [...addData];
for (let i = 0; i < setArr.length; i++) {
  const current = setArr[i];
  if (current.includes("p")) {
    addData.delete(current);
  }
}

// for (let course of addData) {
//   if (course.search("p") != -1) {
//     addData.delete(course);
//   }
// }

// console.log(addData, addData.size);

// union of set
const uData = [1, 2, 3, 4, 5];
const uData2 = [3, 7, 5, 9];
const uData3 = [...uData, ...uData2];

const setU = new Set(uData3);
log(setU);

// interset of set
const setInter = new Set(uData2);
// const finalInterArray = uData.filter(function (n) {
//   return setInter.has(n);
// });
// const finalInterArraySet = new Set(finalInterArray);
// console.log(finalInterArraySet);

let finalInterArray2 = [];
for (let i = 0; i < uData.length; i++) {
  const curr = uData[i];
  if (setInter.has(curr)) {
    finalInterArray2.push(curr);
  }
}
const finalInterArraySet2 = new Set(finalInterArray2);
log(finalInterArraySet2);

// get the set union and set interset of the following
const arr1 = [13, 15, 20, 10];
const arr2 = [9, 13, 10, 14, 17];
