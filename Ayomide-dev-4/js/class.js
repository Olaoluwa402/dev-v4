// let name = Ayomide;
// let surname = Smith;

function fullname(name, surname) {
  let myname = "My Name is " + name + " " + surname;

  return myname;
}
console.log(fullname("Ayomide", "Smith"));

//  starts with

function words(argument, confirm) {
  return argument.startsWith(confirm);
}
console.log(words("javascript is new and renovative language", "is"));
