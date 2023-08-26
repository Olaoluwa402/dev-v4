const form = document.getElementById("form");
// console.log(form)


form.addEventListener("submit", () => {
  // event.preventDefault();

  const fullname = document.getElementsByClassName("FullName")[0];
  // console.log(fullname)

  const username = document.getElementById("Username");

  const email = document.getElementsByClassName("email")[0];

  const password = document.getElementsByClassName("password")[0];

  const cPassword = document.querySelector("#C-password");


  if (username.value == "" || fullname.value == "" || email.value == "") {
    alert("Please fill in the required information.");

  }else if(password.value.length < 4){
    alert("Your password must be greater than 4 characters.");

  }else if(password.value != cPassword.value){
    alert("password does not match.")

  }else{
    alert("your form is completed")
  }
});
