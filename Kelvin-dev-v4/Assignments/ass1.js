const formcl = document.getElementById("form");
const ss2 = document.querySelector("#username");
// console.log(formcl);
formcl.addEventListener("submit", () => {
  //   imp.preventDefault();

  const userName = document.getElementById("username");
  const emailAdd = document.getElementById("email");
  const passWord = document.getElementById("password");
  const passWordRep = document.getElementById("repPassword");

  if (userName.value == "" || emailAdd.value == "") {
    alert("username or email address must be present.");
  } else if (passWord.value.length < 4) {
    alert("password must be greater than four characters.");
  } else if (passWord.value != passWordRep.value) {
    alert("password does not match.");
  }
  //   console.log(passWord.value.length);
  //   console.log(ss2.value);
});
