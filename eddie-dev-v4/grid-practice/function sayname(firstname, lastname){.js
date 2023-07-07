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