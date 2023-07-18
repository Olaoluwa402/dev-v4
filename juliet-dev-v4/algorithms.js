// Truncate a string (first argument) if it is longer than 
// the given maximum string length (second argument). Return 
// the truncated string with a ... ending.

function truncString(str, lengthStr){
    if(str <= lengthStr){
        return str;
    }else{
        return str.slice(0, lengthStr) + "...;"
    }
}


log(truncString("juliet is a good person", 10))

// Write a function that splits an array (first argument) into groups, the length 
// of size (second argument) and returns them as a two-dimensional array.
// chunkArrayInGroups(["a", "b", "c", "d"], 2) should return [["a", "b"], ["c", "d"]]

function splitedArra(arr, size) {
    let result = [];
    
    while(arr.length > 0) {
      result.push(arr.splice(0, size));
    }
    
    return result;
  }
  
  log(splitedArra(["a", "b", "c", "d"], 2));


  // Return the provided string with the first letter of each word capitalized.
//  Make sure the rest of the word is in lower case.For the purpose of this exercise, 
// you should also capitalize connecting words like the and of.


function titleCase(str) {
    let words = str;
    
    for (let i = 0; i < words.length; i++) {
      words[i] = words[i][0].toUpperCase() + words[i].slice(1);
    }
    
    return words;
  }
  
  console.log(titleCase("my name is juliet"));



// Truncate a string (first argument) if it is longer than 
// the given maximum string length (second argument). Return 
// the truncated string with a ... ending.

// function truncString(str, lengthStr){
//     if(str <= lengthStr){
//         return str;
//     }else{
//         return str.slice(0, lengthStr) + "...;"
//     }
// }


// log(truncString("juliet is a good person", 10))




