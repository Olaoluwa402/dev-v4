import React, {useState, useEffect, useContext} from 'react'
import styles from './Login.module.css'
// import Navigation2 from '../Navigation/Navigation2/Navigation2'
// import Button2 from '../Button2/Button2'
// import Button3 from '../Button3/Button3'
import { GlobalContext } from '../../context'
import {Link} from 'react-router-dom'
import { loginReq} from "../../apiCalls";
import {BeatLoader} from 'react-spinners'
import { useNavigate } from "react-router-dom";



const Login = ({login}) => {
  const { user, setUser, isLoading, setIsLoading } = useContext(GlobalContext);
  const navigate = useNavigate();
  const [value, setValue] = useState({
    password: "",
    email: "",
  });



  function handleChange(e) {
    const { name, value } = e.target;

    setValue((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  useEffect(() => {
  
    if (login && user) {
      //redirect user to login page
      navigate("/dashboard");
    }
  }, [login, user]);

  async function LoginHandler() {
    // submit the record to the server via api call
    const { email, password } = value;
    // console.log(email, password, username);
    setIsLoading((prev) => ({
      ...prev,
      login: true,
    }));
    const loginUser = await loginReq(email, password);

    //set use to the global context
    setUser(loginUser);
    setIsLoading((prev) => ({
      ...prev,
      login: false,
    }));
  }

  
  return (
    <div className={styles.container}>
  <div className={styles.inner_container}>
    <div><img src='https://res.cloudinary.com/dfeyofjln/image/upload/v1692657182/SignUp_Pix_slj59o.png'/></div>
  <div className={styles.hero}>
    <div className={styles.top}>
      <div className={styles.topright}>
         <h2>Log in to </h2>
         <img src='https://res.cloudinary.com/dfeyofjln/image/upload/v1692172726/2OC_logo-removebg-preview_q75nqy.png'/>
      </div>
     
      <p>Enter your details below</p>
    </div>

    <div className={styles.input_group}>
      <input 
      type='text'
      name = "email" 
      id={styles.name} 
      placeholder='Email or Phone Number'  
      onChange={handleChange}></input>
    </div>
    
    <div className={styles.input_group}>
      <input 
      type='password' 
      name = "password" 
      id={styles.name} 
      placeholder='Password'
      onChange={handleChange}></input>
    </div>
    <div className={styles.buttons}>
    {isLoading ? (
                  <BeatLoader color="#36d7b7" />
                ) : (
                  <button className={styles.login}
               onClick={LoginHandler}><Link to= '/dashboard'>
              Log in</Link></button>
  
                )}
                 <button className={styles.forget}><Link to= '/'>Forget Password?</Link></button>
        
    </div>
             
    </div>
    
  </div>
  </div>
  )
}

export default Login
