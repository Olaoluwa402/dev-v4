const days ={
    0: "Sunday",
    1: "Monday",
    2: "Tuesday",
    3: "Wednesday",
    4: "Thursday",
    5: "Friday",
    6: "Saturday",

}






function getDay(num){

   if(num < 0 || num > 6){
    return `Not a day of the week`;
   } else{
    return ` Today is ${days[num]}`;
   }
}

console.log(getDay(5));
console.log(getDay(8));



// const num = {

//     0: "Sunday",
//     1: "Monday",
//     2: "Tuesday",
//     3: "Wednesday",
//     4: "Thursday",
//     5: "Friday",
//     6: "Saturday",
// }
   
// function getNum(day){

//     let getNumValues = Object.values(num);
//     for( let i = 0; i < getNumValues.length; i++);

//     if(day == getNumValues){
//         return num[day];
//     }

    

// }

// console.log(getNum("Sunday"));