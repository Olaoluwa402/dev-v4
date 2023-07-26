// //regular expression
// //1. using Regex constructor
const {log} = console;

// const a = "john";

// const flag = "gi";

// const rg = RegExp( a, flag);
// log(rg);

// //2. using double forward slashes

// const reg = /john/gi;

// log(reg, "Reg");

// const data_1 = "Hacking is the act of identifying and then exploiting weaknesses in a computer system or network hacking, usually to gain unauthorized access to personal or organizational data."

// const myRegex = "hacking";

// const result = myRegex.test(data);

// log(result, "result");


// function getPattern(data, keyword){
//     const regx = new RegExp(keyword, 'gi');
//     if(regx.test(data)){
//         return `${keyword} is present` }

//     else{ return `${keyword} is not present`

//     }
// }

// log(getPattern(data_1, "hacking"));

const userform = document.getElementById("form");
// console.log(userform)


userform.addEventListener("submit", (red) => { 
    red.preventDefault();
  
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirm = document.getElementById("confirm-password");
    console.log(username);
    console.log(email);
    console.log(password);
    console.log(confirm);
    log(password.value);
  if(username.value == "" || email.value == ""){
    alert("This field must be filled");
  }

else if (password.value.length < 8 ){
   alert("Your password must be more than 8 characters.");
}

else if (password.value != confirm-password.value){
   alert("Password does not matchMedia.")
}

else{
    alert("Your Form is Completed");
}
})
   


