//check that DOM is ready
if ((document.readyState = "loading")) {
    document.addEventListener("DOMContentLoaded", ready);
  } else {
    ready();
  }
  
  // function to be called when DOM is ready
  function ready() {
    const submitBtn = document.getElementById("signup-btn");
    submitBtn.addEventListener("click", submitHandler);
  }
  
  // User class for creating user model
  class User {
    constructor(email = "", password = "") {
      this.email = email;
      this.password = password;
    //   this.privacy = privacy;
    }
  }
  
  //submit form vfields handler
  function submitHandler(e) {
    // prevent form defauklt behavior
    e.preventDefault();
  
    //   get all the form field by thier id
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    // const privacy = document.getElementById("privacy").checked;
  
    //store the form firld values in an object
    const data = {
      email: email,
      password,
    //   privacy,
    };
  
    //   validate the input fields
    const validationResult = validate(data);
    console.log(validationResult);
  
    //convert the validation object result to an array
    const validateToArray = Object.keys(validationResult);
  
    //check ids arrors are present in the array
    if (validateToArray.length > 0) {
      // alert error
      alertMsg("An error ocurred", "error");
  
      //get the errors element and update their text content to the error message
      const email = document.getElementById("error-email");
      const password = document.getElementById("error-password");
    //   const privacy = document.getElementById("error-privacy");
      email.textContent = validationResult.email ? validationResult.email : "";
      password.textContent = validationResult.password
        ? validationResult.password
        : "";
    //   privacy.textContent = validationResult.privacy
    //     ? validationResult.privacy
    //     : "";
  
      //remove the errors after 4 seconds
      setTimeout(() => {
        document.getElementById("error-email").textContent = "";
        document.getElementById("error-password").textContent = "";
        // document.getElementById("error-privacy").textContent = "";
      }, 4000);
      return;
    }
  
    //instantiate the new user class
    const user = new User(email, password);
  
    console.log(user);
  
    //get the users list from the storage,
    const users = localStorage.getItem("users")
      ? JSON.parse(localStorage.getItem("users"))
      : [];
    //check that email does not exist and return error message if it exist
    const userExist = users.find((u) => user.email == user.email);
  
    if (userExist) {
      alertMsg("user already exist");
      return;
    }
    //copy the record and add the new user to the end of the list
    const userCopy = [...users, user];
  
    //save the users back to local strogae
    localStorage.setItem("users", JSON.stringify(userCopy));
    alertMsg("Succefully registered", "success");
  }
  
  //validate for records
  function validate(data) {
    const error = {};
  
    if (!data.email) {
      error.email = "Email is required";
    } else if (!/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(data.email)) {
      error.email = "email is not a valid one";
    }
  
    if (!data.password || data.password.length <= 4) {
      error.password =
        "password is required and must be more than 4 character long";
    }
  
    // if (!data.privacy) {
    //   error.privacy = "please accept the terms and condition";
    // }
  
    return error;
  }
  
  //alert mesages fucntion
  function alertMsg(message, type) {
    const alertBox = document.createElement("div");
    alertBox.style.width = "200px";
    alertBox.style.height = "80px";
    alertBox.style.borderRadius = "6px";
    alertBox.style.padding = "10px";
    alertBox.style.color = "#fff";
    alertBox.style.backgroundColor = `${
      type == "success" ? "green" : type == "error" ? "brown" : "brown"
    }`;
  
    alertBox.style.position = "fixed";
    alertBox.style.top = 0;
    alertBox.style.right = 0;
  
    alertBox.style.display = "flex";
    alertBox.style.justifyContent = "center";
    alertBox.style.alignItems = "center";
  
    alertBox.innerHTML = `<p> ${message} </p>`;
  
    const bodyElem = document.querySelector("body");
  
    bodyElem.appendChild(alertBox);
  
    //remove aletbox after 4 seconds
    setTimeout(() => {
      bodyElem.removeChild(alertBox);
    }, 4000);
  }
  