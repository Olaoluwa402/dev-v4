const formData = document.getElementById("formcl");
console.log(formData);

btn = document.getElementById("submit");
// console.log(btn)
// btn.onclick =() => console.log("done")

formData.addEventListener("submit", (red) => {
  red.preventDefault();

  const username = document.getElementById("username");
  const email = document.getElementById("email");
  const password = document.getElementById("password");
  const confirmPassword = document.querySelector("#confirm-passsword");
  console.log(confirmPassword);

  if (username.value == "" || email.value == "") {
    alert("username or email is required.");
  } else if (password.value.length < 4) {
    alert("password must be at least 4 characters");
  } else if (password.value != confirmPassword.value) {
    alert("password does not match");
  } else {
    alert("complete");
  }
});
