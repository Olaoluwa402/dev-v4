// ******************************************************************************************************************

const formData = document.getElementById("form")
console.log(formData)


formData.addEventListener("submit" , (inn) => {
    inn.preventDefault();
    // console.log("happy")

    const userName = document.getElementById("username");
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    const ConfirmPassword = document.getElementById("Confirm Password");
    console.log(userName , email , password , ConfirmPassword)

    if (userName.value == '' || email.value == '') {
        alert('username and email must be present and valid');
    }
    else if (password.value.lenght <= 4){
        alert('password must be greater than 4 characters.');
    }
    else if (password.value != ConfirmPassword.value) {
        alert('password confirmation invalid');
    }

       console.log(password.value.lenght);
    console.log(user.value);

})