// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
btn.onclick = function () {
  modal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

// end of modal class

document.getElementById("email");
document.getElementById("password");
document.getElementById("comfirm_password");

// username

function login() {
  const button = document.getElementById("form").submit();
  button.addEventListener("click", () => {
    // action will go here

    function user(username) {
      if (username) {
        alert("please, input your username");
      }
    }
    user("");

    // email
    function email(email) {
      if (email == "") {
        alert("please, input your email");
      } else if (email) {
        return true;
      }
    }
    email();
    // password

    const password = /[@%$&*#!a-z0-9]/gi;
    if (password == "") {
      alert("please, input your email");
    } else if (password || password.length === 9) {
      alert(true);
    } else {
      alert("it must be 8 characters");
    }

    // confirm password

    const conPassword = () => {
      if (password) {
        alert(true);
      }
    };

    document.body.style.backgroundColor = "fuchsia";
    conPassword();
    document.getElementById("username").value;
    document.getElementById("email").value;
    document.getElementById("password").value;
  });
}
const inputt = document.querySelector("input");
for (let i = 0; i < inputt.length; i++) {
  inputt[i].style.border = "1px solid blue";
}
console.log(inputt);
input[0].style.backgroundColor = "blue";
