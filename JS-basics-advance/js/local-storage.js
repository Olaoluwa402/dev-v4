// local storage
//methods
//1. localStorage
const { log } = console;

const localStore = localStorage;
log(localStore, "store");

//2. localStorage.clear()
// localStorage.clear();

//3. localStorage.setItem

const list = [1, 2, 3, 5];
const person = { name: "john", age: 20 };

localStorage.setItem("list", JSON.stringify(list));
localStorage.setItem("person", JSON.stringify(person));

//4. localStorage.getItem()
const parsedList = JSON.parse(localStorage.getItem("list"));
log(parsedList, "parsedList");

//5. localStorage.removeItem()
localStorage.removeItem("list");
localStorage.removeItem("person");

// create a user object with the following keys
//and set a value of your choice to each key - username, email, friends,token
// store teh create user in local storage
//get back the stored user from local storage
//log your result in console
