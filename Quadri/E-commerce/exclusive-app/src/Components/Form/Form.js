
import React,{useState} from "react";
import styles from "./Form.module.css"


const Form=()=>{

    const[firstName, setFirstName] =useState("");
    const[lastName,setLastName]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("")

    const changeHandler=(e)=>{
        const{name,value} = e.target;

        if(name==="firstName"){
            setFirstName(value);
        }
        if(name==="lastName"){
            setLastName(value);
        }
        if(name==="email"){
            setEmail(value);
        }

        if(name==="password"){
            setPassword(value);
        }
    };

        const submitHandler=(e)=>{
            e.preventDefault();

            const data={
                firstName,
                lastName,
                email,
                password,
            }
            console.log(data)
        }
            console.log(firstName,lastName,email,password)
    return(
        <div className={styles.container}>
            <form onSubmit={submitHandler}>
                <h2>Sign Up Form</h2>
                <div className={styles.form_grp}>
                    <label htmlFor="firstName">Firstname</label>
                    <input type="text" placeholder="firstName" name="firstName" value={firstName} onChange={changeHandler} />
                </div>
                <div className={styles.form_grp}>
                    <label htmlFor="lastName">Lastname</label>
                    <input type="text" placeholder="lastName" name="lastName" value={lastName}  onChange={changeHandler}/>
                </div>
                <div className={styles.form_grp}>
                    <label htmlFor="Email">Email</label>
                    <input type="email" placeholder="email" name="email" value={email} onChange={changeHandler} />
                </div>
                <div className={styles.form_grp}>
                    <label htmlFor="Password">Password</label>
                    <input type="password" placeholder="password" name="password" value={password} onChange={changeHandler} />
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default Form