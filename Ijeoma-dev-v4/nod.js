let alphabet = "margin";
let alphabet_1 = alphabet.charCodeAt(2);
console.log(alphabet_1);

function Name(firstName, lastName){
    
    return`my name is ${firstName}  ${lastName}.`;
}
console.log(Name("Ijeoma", "Igbokwe"));



// function method(string, word){
 
// return string.startsWith(word);
// }
// console.log(method("This is JavaScript class", "class"));

// function MatchWith(list){
//  return MatchWith(list);
// return MatchWith(/is/gi)
// }
// console.log(MatchWith("This is JavaScript class"))

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
const arr_5 = ass.friends[0].skills[2];
console.log(arr_5);

const sliceData = [1,3,5,6,8,10,9,70];
console.log(sliceData.slice(4,7));
console.log(sliceData.slice(0,8));
console.log(sliceData.slice(7, 8));

// splice
const textData = [3,5,9,7,8,9];
const data = textData.splice(3, 3, "John", "James", "Bayo");
console.log(data);
console.log(textData);
textData.push(data);
console.log(textData);
console.log(textData.pop());
console.log(textData);
console.log(textData.shift(3,5,9));

const reverseData_1 = [10, 11, 12, 13];
const reverseData_2 = [1, 2, 3, 4, 5];
const joinData = reverseData_1.concat(reverseData_2);
console.log(joinData);
joinData.reverse();
console.log(joinData);
joinData.toString();
console.log(joinData);
// const reverseData = reverseData_1.reverse();
// console.log(reverseData);
// const reverseData1 = reverseData_2.reverse();
// const jointdata2 = reverseData.concat(reverseData1);
// console.log(jointdata2);
