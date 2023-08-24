const { log } = console;
// *1. The formula to convert from Celsius to Fahrenheit is the
// temperature in Celsius times 9/5, plus 32.
// You are given a variable celsius representing a temperature in Celsius.
// Define a variable fahrenheit and assign it the Fahrenheit temperature
// equivalent to the given Celsius temperature.
// Use the formula mentioned above to help convert the Celsius temperature to Fahrenheit.
// NOTE; Return the value of the result from the function*/

function convertToFahrenheit(celsius) {
  let fahrenheit = celsius * (9 / 5) + 32;
  return fahrenheit;
}
let celsius = 30;
let fahrenheit = convertToFahrenheit(celsius);
console.log(fahrenheit);

// / 2. Given an integer array nums, move all the even integers
// //     at the beginning of the array  followed by all the odd integers.
// //     Return any array that satisfies the condition
// //     Example:
// //     Input: nums = [3,1,2,4]
// //     output: [2,4,3,1]
// //     Explanation: outputs: [4,2,3,1], [2,4,1,3] and [4,2,1,3]
// //     would also be accepted

// function arrayNum(nums) {
//   let left = 0;
//   let right = nums.length - 1;

//   while (left < right) {
//     if (nums[left] % 2 === 0) {
//       left++;
//     } else if (nums[right] % 2 === 1) {
//       right--;
//     } else {
//       [nums[left], nums[right]] = [nums[right], nums[left]];
//       left++;
//       right--;
//     }
//   }

//   return nums;
// }
// const nums = [3, 1, 2, 4,];
// const result = arrayNum(nums);
// log(result);

const numb = [3, 1, 2, 4];

function arrayNum(nums) {
  const newArr = [];
  for (let t = 0; t < nums.length; t++) {
    if (nums[t] % 2 == 0) {
      newArr.unshift(nums[t]);
    } else if (nums[t] % 2 == 1) {
      newArr.push(nums[t]);
    }
  }
  return newArr;
}

console.log(arrayNum(numb));

// 3. Write a function that takes in integers in minute and convert it to seconds
//         Examples:
//         convert(5) => 300
//         convert(3) => 180

function convert(number) {
  return number * 60;
}
log(convert(2));

// 4. Write a function that returns true if a number passed into it is an
//         even number and false if otherwise.

const even = function (number) {
  if (number % 2 === 0) {
    return true;
  } else {
    return false;
  }
};

log(even(3));

// 5. Create a function that takes a number as an argument, increments the number by
//         1 and return the result. Example addition(0) => 1, addition(4) => 5

function addition(number) {
  return number + 1;
}

log(addition(10));
