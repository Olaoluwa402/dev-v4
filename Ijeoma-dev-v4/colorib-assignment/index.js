let alphabet = "margin";
let alphabet_1 = alphabet.charCodeAt(2);
console.log(alphabet_1);

function Name(firstName, lastName){
    
    return`my name is ${firstName}  ${lastName}.`;
}
console.log(Name("Ijeoma", "Igbokwe"));



function method(string, word){
 
return string.startsWith(word);
}
console.log(method("This is JavaScript class", "class"));

function MatchWith(list){
 return MatchWith(list);
return MatchWith(/is/gi)
}
console.log(MatchWith("This is JavaScript class"))

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