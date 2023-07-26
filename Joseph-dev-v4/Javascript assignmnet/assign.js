// Assignmnet 1
const {log} = console;

function convertToFahrenheit(celsius){

    var fahrenheit = (celsius * 9/5) + 32;

    return fahrenheit;
}

 log(convertToFahrenheit(35), "Celsius");

 // Assignmnet 2

 const num = [3,2,4,6,8,9];
 let finalResult = []
 for(let i = 0; i < num.length; i++){
      const curr = num[i];
    if((curr) % 2 === 0){
        finalResult.unshift(curr);
    }
else  {
    finalResult.push(curr);
}
 }

log(finalResult, "Result");


//Assignmnet 3

function Convert(minutes){
    return (minutes * 60);

}

log(Convert(5), "Minutes1");
log(Convert(3), "Minutes2");


// Assignmnet 4

function checkNum(num){
    
    if((num%2) === 0){
        return (true);
    }
    else {
        return (false);
    }
}

log(checkNum(5));
log(checkNum(4));

// Assignmnet 5

function increment(numb){
    const result = numb + 1;

    return (result);

}

log(increment(0));
log(increment(7));


// Assignment 6

const givenString = "Hello";

let finalReverse = "";

for(let i = givenString.length -1; i >=0; i--){

 curr = givenString[i];

//  log(curr, "Current");



finalReverse = finalReverse + curr;


}

log(finalReverse, "Final");

// Assignment 7

const str_1 = "This is the beginning of a great journey into Javascript";
const str_2 = "Life of a programmer"
const str_3 = "We are good"

const truncate = function(str, len){
    if(str.length > len){
        if(str.length <= 10){
            return str.slice(0, str.len) + "...";   
        }
       else {
        return str.slice(0, len) + "...";
       }
    }
       else {
        return str;
       }   

}

log(truncate(str_1, 17), "Truncate");
log(truncate(str_2, 17), "truncate2");
log(truncate(str_3, 17), "truncate3");

const myArray = [];

// Only change code below this line

for (let k = 1; k < 10; k += 2){

  myArray.push(k);
}


for(let j = 9; j > 0; j -= 2){

    myArray.push(j);
}
log(myArray, "myArray");



const myArr = [2, 3, 4, 5, 6];

// Only change code below this line
let total = 0;

for(let i = 0; i < myArr.length; i++){

  total = total + (myArr[i]);
}

log(total, "total");


function multiplyAll(arr) {
    let product = 1;
    // Only change code below this line
    for(let i = 0; i < arr.length; i++){
      for(let j = 0; j < arr[i].length; j++){
        product = product * (arr[i][j]);
      }
    }
    // Only change code above this line
    return product;
  }
  
  log(multiplyAll([[1, 2], [3, 4], [5, 6, 7]]), "Multiply");



  function sum(arr, n) {
    // Only change code below this line
     if(n <= 0) {
       return 0;
  }
  else {
    return sum(arr, n  - 1) + arr[n - 1];
  }
    // Only change code above this line
  }


  log(sum([2,3,4,5,6], 3), "Sum");





  const contacts = [
    {
      firstName: "Akira",
      lastName: "Laine",
      number: "0543236543",
      likes: ["Pizza", "Coding", "Brownie Points"],
    },
    {
      firstName: "Harry",
      lastName: "Potter",
      number: "0994372684",
      likes: ["Hogwarts", "Magic", "Hagrid"],
    },
    {
      firstName: "Sherlock",
      lastName: "Holmes",
      number: "0487345643",
      likes: ["Intriguing Cases", "Violin"],
    },
    {
      firstName: "Kristian",
      lastName: "Vos",
      number: "unknown",
      likes: ["JavaScript", "Gaming", "Foxes"],
    },
  ];
  
  function lookUpProfile(name, prop) {
    // Only change code below this line
  for (let i = 0; i < contacts.length; i++) {
      if (contacts[i].firstName === name) {
        if (contacts[i].hasOwnProperty(prop)) {
          return contacts[i][prop];
        } else {
          return "No such property";
        }
      }
    }
    return "No such contact"
  }
  
  log(lookUpProfile("Akira", "likes"), "Lookup");



  const numbr = Math.floor(Math.random() * 11);

  log(numbr, "numbr");


  log(Math.abs(-5), "ABS"); 

  let language = "Javascript";

  log(language.substr(4,6));

  let country = "Nigeria Ghana Togo";

  log(country.split(" "));


  let string = "Learn new Javascript, the new and effective way new"

  log(string.match("Javascript"));
  log(string.match(/new/gi));


  function convertToInteger(str, radix) {
   return parseInt(str, radix);
  }
  
  log(convertToInteger("10011", 2));



  function rangeOfNumbers(startNum, endNum) {

    if (startNum === endNum){
       return [startNum];
    }
  
    else {
  
    let  finalRange = rangeOfNumbers(startNum, endNum -1);
      finalRange.push(endNum);
    return finalRange;
  
    }
  };


  log(rangeOfNumbers(1,5));



  const perimeterOfCircle = function(radius){
    
    const PI = Math.PI;

    return Math.ceil(2 * (PI) * radius);

  }

  const result = perimeterOfCircle;

  log(result);

  log(perimeterOfCircle(2.2));


  log((function(s){

    return 4 * s;

  })(5));

  function removeFirstTwo(list) {
    // Only change code below this line
    const [a, b, ...shorterList] = list; // Change this line
    // Only change code above this line
    return shorterList;
  }
  
  const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const sourceWithoutFirstTwo = removeFirstTwo(source);
  log(sourceWithoutFirstTwo);

    

  const result_1 = {
    success: ["max-length", "no-amd", "prefer-arrow-functions"],
    failure: ["no-var", "var-on-top", "linebreak"],
    skipped: ["no-extra-semi", "no-dup-keys"]
  };

  function makeList(arr) {
    // Only change code below this line 
     "use strict";
     let failureItems = [];
     for(let i = 0; i < arr.length; i++){

    failureItems.push(`<li class="text-warning">${arr[i]}</li>`);
    // Only change code above this line
  
    return failureItems;
    
  }
  
}
  
  const failuresList = makeList(result_1.failure);

  log(failuresList, "FailureList");


  const higherOrder = n => {

    const middleOrder =  m => {

    const lowerOrder = t =>{

      return 2 * n + 3 * m + t;
    }

    return lowerOrder;
  }
   return middleOrder;

  };

  log(higherOrder(2)(3)(10));


  // // function searchBook(books, keyword) {
  // //   const foundBooks = books.filter(
  // //     (book) => book.title.startsWith(keyword) || book.author === keyword
  // //   );
  // //   return foundBooks;
  // // }
  
  // // console.log(searchBook(books, "made"));
  
  // /* { title: "Lord of the Ring", author: "ay", isbn: 1, price: "$200" },
  // { title: "Game of thrones", author: "ay", isbn: 2, price: "$300" } */
  // //searchBook(books, "wonder"); // { title: "wonder", author: "johnson", isbn: 3, price: "$250" }

  // const books = [
  //   { title: "Lord of the Ring", author: "ay", isbn: 1, price: "$200", },
  //   { title: "Game of thrones", author: "ay", isbn: 2, price: "$300" },
  //   { title: "wonder", author: "johnson", isbn: 3, price: "$250" },
  //   { title: "made in black", author: "black", isbn: 4, price: "$400" },
  //   { title: "james is  back", author: "james", isbn: 5, price: "$500" },
  // ];

  // const bookPrices = books.map((book) => {

  //   return +book.price.slice(1);
  
  // })
  
  // log(bookPrices)


  const books = [
      { title: "Lord of the Ring", author: "ay", isbn: 1, price: "$200", qty: 2 },
      { title: "Game of thrones", author: "ay", isbn: 2, price: "$300", qty: 5 },
      { title: "wonder", author: "johnson", isbn: 3, price: "$250", qty: 3},
      { title: "made in black", author: "black", isbn: 4, price: "$400", qty: 4 },
      { title: "james is  back", author: "james", isbn: 5, price: "$500", qty : 1},
    ];


    const bookPrices = books.map((book) => {

      return +book.price.slice(1);
    })

    log(bookPrices, "bookPrices");


    console.log(bookPrices.reduce((arr, curr) => arr + curr, 0));


    const everyList = bookPrices.every((elem) => typeof elem === "number");

    log(everyList);


   function searchBook_1 (arr, isbnNum){
    const foundBooks_1 = arr.find((book) => book.isbn = isbnNum);

    return foundBooks_1
   }

   log(searchBook_1(books,3));

    function bookPrice(books){
    const sortedprice = books.sort((current,previous) => +previous.price.slice(1) - +current.price.slice(1))

      return sortedprice;
  
    }

    log(bookPrice(books), "bookPrice");

    
         

   function searchPrice (arr, element){
    
    const finalPrice = arr.filter((book) => +book.price.slice(1) > element );

    return finalPrice;
   }

  //  log(searchPrice(books, 250, "finalPrice"));



   function searchPrice_1 (arr, element, item){
    
    const finalPrice_1 = arr.filter((book) => +book.price.slice(1) > element  && book.qty > item);

    return finalPrice_1;
   }

  //  log(searchPrice(books, 250, 4 ,"finalPrice"));



   function updatePrice(arr, element, newPrice){

    const index = arr.findIndex((book) => book.isbn === element);
    
    arr[index].price = `$${newPrice}`;

    return arr;
   }

  //  log(updatePrice(books, 3, 800, "updated"));



  const arr = [
    2,
    "john",
    [3,4,5],
    {name: "john", age: 20},
    15,
    "bola", null
  ];

  let [item1, item2, item3, item4] = arr;

const {} = item4;
  // log([item1, item2, item3, item4]);

  let[, ,...others] = arr;


log(others,"Others");


let arr2 =  ["cashew", "password", "orange", "mango", "banana", "apple"];

const [p1, ,...rest] = arr2;


let output = p1 + "," + rest;

log(output.split(","));


// const countries = [
//   ["Lagos","Ikeja"],
//   ["Oyo", "Ibadan"],
//   ["Kwara", "Ilorin"]
// ];


// for (let[state,capital] of countries) {

//   log(state, capital);
// }


const continent = [
  {Africa: [
   ["Lagos","Ikeja"],
   ["Oyo", "Ibadan"],
   ["Kwara", "Ilorin"]
  ],
},
]
  

// for (let{Africa} of continent) {

//       log(Africa);

//     for(let[st,cp] of Africa){

//       log(st,cp);
//     } 
//   }

  
  // shortcut
  
  // for (let [state, capital] of continent[0].africa) {
  //   log(state, capital);
  // }
  
  // no shortcut

  // function getStateCapital(continentData, continentName,) {
  //   for (let continent of continentData) {
  //     if (!continent.hasOwnProperty(continentName)) {
  //       return "Not a valid continent";
  //     }
  //     for (let [state, capital] of continent[continentName]) {
  //       log(state, capital);
  //         // return `${state} ${capital}`;
  //     }
  //   }
  
  //   return "";
  // }
  
  // log(getStateCapital(continent, "Africa"));
  
  // aasignment: get the state and capital

  const continent_2 = [
    {
      africa: {
        nigeria: [
          ["Lagos", "Ikeja"],
          ["Oyo", "Ibadan"],
          ["Kwara", "Ilorin"],
        ],
        ghana: [
          ["G_state_1", "G_city_1"],
          ["G_state_2", "G_city_2"],
          ["G_state_3", "G_city_3"],
        ],
      },
    },
  
    {
      europe: {
        france: [
          ["F_state_1", "F_city_1"],
          ["F_state_2", "F_city_2"],
          ["F_state_3", "F_city_3"],
        ],
        italy: [
          ["I_state_1", "I_city_1"],
          ["I_state_2", "I_city_2"],
          ["I_state_3", "I_city_3"],
        ],
      },
    },
  ];



  // function getStateCapital(continentData, continentName) {
  //   for (let items of continentData) {
  //     if (!continentData.hasOwnProperty(continentName)) {
  //       return "Not a valid continent";
  //     }
  //     for (let [countryName] of continent_2[continentName]) {

  //         return countryName;
  //     }
     
  //   }
  //   return "";
  // }

  // log(continent_2, africa);
  


  // function findCity(country, state) {
  //   for (let continent of continent_2) {
  //     for (const continentKey in continent) {
  //       if (continent.hasOwnProperty(continentKey)) {
  //         const countries = continent[continentKey];
  //         if (countries.hasOwnProperty(country)) {
  //           const states = countries[country];
  //           for (const stateArray of states) {
  //             if (stateArray[0] === state) {
  //               return stateArray[1];
  //             }
  //           }
  //         }
  //       }
  //     }
  //   }
  //   return "City not found";
  // }
  
  // const city = findCity("nigeria", "Lagos");
  // console.log(city); // Output: "Ikeja"



  
// function getStatesAndCapitals(country) {
//   for (const continent of continent_2) {
//     for (const continentKey in continent) {
//       if (continent.hasOwnProperty(continentKey)) {
//         const countries = continent[continentKey];
//         if (countries.hasOwnProperty(country)) {
//           const statesAndCapitals = countries[country].map(([state, capital]) => ({ state, capital }));
//           return statesAndCapitals;
//         }
//       }
//     }
//   }
//   return "Country not found";
// }
// const county = "nigeria";
// let city = getStatesAndCapitals(county)
// log(city);
  




function getStatesAndCapitals(continent_2, continentData, country) {
  for (let continentObj of continent_2) {
    if (continentObj.hasOwnProperty(continentData)) {
      const countries = continentObj[continentData];
      if (countries.hasOwnProperty(country)) {
        const statesAndCapitals = countries[country];
        let result = "";
        for (let [state, capital] of statesAndCapitals) {
          result += `${state} : ${capital}\n`;
       
        }
        return result;
      }
    }
  }
  return "Not a valid country.";
}

// const statesAndCapitals1 = getStatesAndCapitals("africa", "nigeria");
log(getStatesAndCapitals(continent_2, "africa", "nigeria"));




// const user = {
//   username : "jossyhod",
//   email : "ikeanyi_joseph@yahoo.com",
//   friends : " James",
//   token : "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"
// }


// localStorage.setItem("user", JSON.stringify(user));

// let username =  JSON.parse(localStorage.getItem("user"));

// log(user, "User");

