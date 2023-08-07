const form = document.getElementById('e-form')
let myInput = document.getElementById('username')
let myMail = document.getElementById('mail')
const myPassword = document.getElementById('password')
let myConfirmpassword = document.getElementById('confirmPassword')



form.addEventListener('submit',e=>{
    e.preventDefault();
    
    checkInputs();
});

function checkInputs(){
    const userNameValue = myInput.value.trim();
    const emailValue = myMail.value.trim();
    const passwordValue = myPassword.value.trim();
    const passwordValue_2 = myConfirmpassword.value.trim()

    if (userNameValue=== '' && userNameValue !=='string'){
        alert('space cannot be left blank')
    } else if ( !isPassword(passwordValue)){
        alert('not a valid password')
    } else if(emailValue === ''|| emailValue ==='number'){
        alert('not a valid e-mail')
    }else if (passwordValue_2 !==passwordValue){
        alert('password does not match')
    }

}


function isPassword (pass){
    return /[A-za-z\0-9]{6,}/.test(pass);
}





const a = 7 + 3;
console.log(a);