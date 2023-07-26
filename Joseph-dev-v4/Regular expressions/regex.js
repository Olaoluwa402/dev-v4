//regular expression
//1. using Regex constructor
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

// const userform = document.getElementById("form");

// userform.addEventListener("submit", (red) => { 
//     red.preventDefault();
  
// const username = document.getElementById("username");
// const email = document.getElementById("email");
// const password = document.getElementById("password");
// const confirm = document.getElementById("confirm-password");
//     console.log(username);
//     console.log(email);
//     console.log(password);
//     console.log(confirm);
//     log(password.value);
//   if(username.value == "" || email.value == ""){
//     alert("Please fill in the required field");

    
//   }

// else if (password.value.length < 8 ){
//    alert("Your password must be more than 8 characters.");
// }

// else if (password.value != confirm-password.value){
//    alert("Password does not matchMedia.")
// }

// else{
//     post("Your Form is Completed");
// }
// })


// JavaScript 2

const userform = document.getElementById("form");

userform.addEventListener("submit", (event) => {
  event.preventDefault();

  const username = document.getElementById("username");
  const email = document.getElementById("email");
  const password = document.getElementById("password");
  const confirmPassword = document.getElementById("confirm-password");

  console.log(username.value);
  console.log(email.value);
  console.log(password.value);
  console.log(confirmPassword.value);

  const passwordPattern = /^.{8,}$/;
  const emailPattern = /@/;

  if (username.value === "" || email.value === "" || !emailPattern.test(email.value)) {
    alert("Please fill in a valid username and email in the required fields");
  } else if (!passwordPattern.test(password.value)) {
    alert("Your password must be more than 8 characters.");
  } else if (password.value !== confirmPassword.value) {
    alert("Password does not match.");
  } else {
    alert("Your Form is Completed");
  }
});

//REGEX ASSIGNMNENTS

1. Which of the following matches regexp /a(ab)*a/

 ans: aaba
      aabababa


2. Which of the following matches regexp /ab+c?/

 ans: abc
      abbb

3. Which of the following matches regexp /a.[bc]+/

 ans: abc
      abbbbbbb
      azc
      abcbcbcbc
      asccbbbbcbcccc

4. Which of the following matches regexp /abc|xyz/

 ans: abc
      xyz
  
5. Which of the following matches regexp /[a-z]+[\.\?!]/

  ans: battle!
     swamping.
     undulate?

6. Which of the following matches regexp /[a-zA-Z]*[^,]=/

  ans: Butt=
       Brittle=
       Other=

7. Which of the following matches regexp /[a-z][\.\?!]\s+[A-Z]/     (\s matches any space character)

  ans: g. H
       i? J

8. Which of the following matches regexp /(very )+(fat )?(tall|ugly) man/

ans: very very fat man
     very very very tall man


9. Which of the following matches regexp /<[^>]+>/

ans: <an xml tag>
     </closetag>
     <with attribute="77"></with>

    
10. Which of the following matches regexp /[Aa-z-_\*\\4-9-]{4,20}@[a-z]{4,9}\.[a-z]{2}/

ans: A*mail\a@seznam.uk
    ____\_@aaaa.uk
