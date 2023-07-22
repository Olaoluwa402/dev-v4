// let text = 'abcdefghijklmnopqrstuvwxyz';
// let length = text.length;
// console.log(length);

// let y = 'welcome to europe!'

// let x = y.replace('europe','áfrica');
// console.log(x);

// let z = y.concat(' ', x);
// console.log(z);

// let w = 'Hello';

// let d = w.split('');
// console.log(d);
// for(let i = 0; i <d.length; i++){
//     const current = d[i];
//     if(current.includes('l')){
    
//     }
// }

// const arr=[];
// const  num = [1,2,3,4,5,6,7,8,9,10,11,12];

// function getEven(num){
//     for(const number of num){
//         if(number >=1 && number % 2 !==0 &&){
//             arr.push(number);
//         }
    

        
    
//     }
//     return arr;
// }


// console.log(getEven(num))



/*1. The formula to convert from Celsius to Fahrenheit is the
temperature in Celsius times 9/5, plus 32.
You are given a variable celsius representing a temperature in Celsius.
Define a variable fahrenheit and assign it the Fahrenheit temperature
equivalent to the given Celsius temperature.
Use the formula mentioned above to help convert the Celsius temperature to Fahrenheit.
NOTE; Return the value of the result from the function*/

// 2. Given an integer array nums, move all the even integers
//     at the beginning of the array  followed by all the odd integers.
//     Return any array that satisfies the condition
//     Example:
//     Input: nums = [3,1,2,4]
//     output: [2,4,3,1]
//     Explanation: outputs: [4,2,3,1], [2,4,1,3] and [4,2,1,3]
//     would also be accepted
//  */

/*
        3. Write a function that takes in integers in minute and convert it to seconds
        Examples:
        convert(5) => 300
        convert(3) => 180
    */

/*
        4. Write a function that returns true if a number passed into it is an 
        even number and false if otherwise. 
    */

/* 
        5. Create a function that takes a number as an argument, increments the number by 
        1 and return the result. Example addition(0) => 1, addition(4) => 5
    */



// converting Celcius to Fahrenheit
    //     function celciusToFahrenheit(celcius){
    //         let fahrenheit = celcius*(9/5) + 32;

    //         fahrenheit = Math.floor(fahrenheit)
    //         return fahrenheit
    //     }

    //     console.log(celciusToFahrenheit(25));


    //     // moving even interger to begining of array and odd to the end
    //         let arr = [2,3,4,5,6,7,8]
    //         let Arr2 = [];
    //     function evenFirst(arr){
    //         for(number of arr){
    //             if(number % 2 ===0){
    //              Arr2.unshift(number)
                 
                
    //             }

    //             if(number % 2 !==0){
    //                 Arr2.push(number);
    //             }
    //         }
    //         return Arr2
    //     }

    //     console.log(evenFirst(arr));

    //     // converting minutes to seconds
    //     function minToSec(min){

    //         return min * 60;

    //     }

    //     console.log(minToSec(5));

    //     // function that return true when argument is even and false when odd
    //     function evenOrOdd(value){
    //         if(value % 2 !==0){
    //             return false
    //         } else{

    //         } return true

    //     }

    //     console.log(evenOrOdd(2));

    //     // function that return its argument plus 1
    // let sum = 0
    //     function additionByOne(num){
    //         let sum = num + 1

    //         return sum;
    //     }

    //     console.log(additionByOne(9));

    //         // reversing string
    //     function stringReverse(word){
    //         let split = word.split("");

    //         let reverse = split.reverse();

    //         let join = reverse.join("");

    //         return join;
    //     }

    //     console.log(stringReverse("Quadri"))

    //     function truncate(sentence){
    //             if(sentence.length > 10){
    //                 return sentence.slice(0,15) + '....'
    //             }
    //     }

    //     console.log(truncate('Real Madrid, they are champions of europe again'));


        function capitalizeFirstLetter(values){

            let str = values.split(" ");

            for(let i = 0; i < str.length; i++){
                str[i] = str[i].charAt(0).toUpperCase()+str[i].substring(1)

               
            }
            return str.join(" ");
           
        }

        console.log(capitalizeFirstLetter('chelsea has the london bragging rights'));


        // function chunkArr(Array,size){
        //     let arr = [];

        //     if(Array.length > 2){
        //         arr.push(Array.splice(2))
        //     }

        //     return arr
        // }

        // console.log(chunkArr('a','b','c','d'))

