function sayname(firstname, lastname){
    var name = "my name is" + " "+ firstname  +" " +   lastname
    var firstname = "John";
    var lastname = "Doe";
    return name
}
console.log(sayname("John", "Doe"));

function firstWord(stringa, stringb){
    
    return stringa.startsWith(stringb)

}
console.log(firstWord("Abel is a boy", "boy"))

const ass = {
    friends:[
        {
            name:"john",
            skills:["JS","HTML","CSS"],
        },
        {
            name:"dayo",
            skills: ["JS","HTML"],
        },
    ]
}
const p = ass.friends[0].name;
console.log (p, "p")

const sliceData = [1,3,5,6,8,10,9,70];
console.log(sliceData.slice(4, 7))
console.log(sliceData.slice())
console.log(sliceData.slice(sliceData.length-1))

const textData = [3, 5, 9, 7, 8, 9]
const cut = (textData.splice(3, 3,  "John", "James", "Bayo"))
console.log(textData, "originalDataAfterCut");
textData.push(cut)
console.log(textData)
textData.pop()
console.log(textData)
textData.shift()
console.log(textData)

const reverseData_1 = [10, 11, 12, 13];
const reverseData_2 = [1, 2, 3, 4, 5];
reverseData_1.reverse()
reverseData_2.reverse()
const sumData = reverseData_1.concat(reverseData_2)
console.log(sumData)
const newStr = sumData.toString()
console.log(newStr)

 // get current local date and time in format of yyyy/mm/dd