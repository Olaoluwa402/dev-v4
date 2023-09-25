import React, { useState, useEffect, useContext} from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { registerReq} from "../../apiCalls";
import { toast } from "react-toastify";
import { GlobalContext } from "../../context";
import styles from "./SignUp.module.css"
import {BeatLoader} from "react-spinners"
import Button2 from "../Button2/Button2"
import Button3 from "../Button3/Button3"

const SignUp = () => {
  const {isLoading, setIsLoading } = useContext(GlobalContext);
  // const navigate = useNavigate();
  const [value, setValue] = useState({
    username: "",
    password: "",
    email: "",
  });

  console.log(value, "valueee");

  const [isRegistered, setIsRegistered] = useState(false); 

  function handleChange(e) {
    const { name, value } = e.target;

    setValue((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  useEffect(() => {
  
      setIsRegistered(false);
    }, [isRegistered]);

  async function handleSubmit() {
    // submit the record to the server via api call
    const { email, password, username } = value;
    // console.log(email, password, username);
    
    setIsLoading((prev) => ({
      ...prev, register: true,
    }));
    const registeredUser = await registerReq(email, password, username);
    console.log(registeredUser);
    if (registeredUser) {
      setIsRegistered(true);
      setIsLoading((prev) => ({
        ...prev, register: false,
      }));
    } 
  }
 

  return (
    <div className={styles.outter}>
      <div className={styles.container}>
        <div className={styles.inner_container}>
          <div>
            <img src="https://res.cloudinary.com/dfeyofjln/image/upload/v1692657182/SignUp_Pix_slj59o.png" />
          </div>
          <div className={styles.hero}>
            <div className={styles.top}>
              <h2>Create an account</h2>
              <p>Enter your details below</p>
            </div>
            <form onSubmit={handleSubmit}>
              <div className={styles.input_group}>
                <input
                  type="text"
                  name="username"
                  id={styles.name}
                  placeholder="Username"
                  onChange={handleChange}
                ></input>
              </div>

              <div className={styles.input_group}>
                <input
                  type="text"
                  name="email"
                  id={styles.name}
                  placeholder="Email or Phone Number"
                  onChange={handleChange}
                ></input>
              </div>

              <div className={styles.input_group}>
                <input
                  type="password"
                  name="password"
                  id={styles.name}
                  placeholder="Password"
                  onChange={handleChange}
                ></input>
              </div>
              <div className={styles.buttons}>
                {isLoading ? (
                  <BeatLoader color="#36d7b7" />
                ) : (
                  <Button2 />
                )}

                <Button3 />
              </div>
            </form>
            <div className={styles.bottomtext}>
              <span>Already have account?</span>
              <Link to="/login">
                <p>
                  <u>Log In</u>
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
