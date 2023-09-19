import React from 'react'
import { useState } from 'react'
import styles from './Form.module.css'


const Form = () => {
    const [FormData, setFormData] = useState({
        password: "",
        username: "",
        email: "",
        confirmPassword: "",

    })
    
const [errors, setErrors] = useState({})
const changeHandler = (e) => {
    setFormData(FormData=> ({...FormData,[e.target.name]: e.target.value}))  //destructuring to get the
}
console.log("formData", FormData);   

const submitHandler = (e) => {
    e.preventDefault();
    const errorMessages = {};
        if (!FormData.username) {
         errorMessages.username = "username is required";
}
        if (!FormData.email) {
                errorMessages.email = "email is required";
}
        if (!FormData.password) {
                 errorMessages.password = "password is required";
}
        if (FormData.confirmPassword !== FormData.password) {
             errorMessages.confirmPassword= "please, confirm password";
        }
               
 setErrors(errorMessages)
 if(Object.keys(errorMessages).length === 0){
    alert("Form is submitted successfully")
 }
 console.log(FormData);
}

  return (
    <div className={styles.container}>
        
        
            <form onSubmit={submitHandler} className={styles.Form}>
            <div>
            <label htmlFor='username'>username</label><br/>
            <input type="text" name='username' placeholder='name' onChange = {changeHandler}/>
            </div>
            {errors.username && <span>{errors.username}</span>}

        <br/>
            <div>
            <label htmlFor='email'>email</label><br/>
            <input type="text" name='email' placeholder='email' onChange = {changeHandler}/>
            </div>
            {errors.email && <span>{errors.email}</span>}
            <br/>

            <div>
            <label htmlFor='password'>password</label><br/>
            <input type="password" name='password' placeholder='password' onChange = {changeHandler}/>
            </div>
            {errors.password && <span>{errors.password}</span>}
            <br/>

            <div>
            <label htmlFor='password'>confirm password</label><br/>
            <input type="password" name='confirmPassword' placeholder='ConfirmPassword'/>
            </div>
            {errors.confirmPassword && <span>{errors.confirmPassword}</span>}
            <br/>
            <button type = 'submit' className={styles.Formbtn}>Submit</button>
            </form>
        
        </div>

  )
}

export default Form;