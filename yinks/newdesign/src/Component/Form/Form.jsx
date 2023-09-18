import { useState } from "react"

import styles from "../Form/Form.module.css"

const Form = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");


  const changeHandler = (e) => {
    const { name, value } = e.target;

    if (name === "email") {
      setEmail(value);
    }

    if (name === "password") {
      setPassword(value);
    }

    if (name ==="firstname"){
      setFirstName(value)
    }

    if (name === lastname){
      setLastName(value)
    }
  };

  const submitHander = (e) => {
    e.preventDefault();
    const data = {
      email,
      password,
      firstname,
      lastname
    };

    console.log(data);
  };

  console.log(email, password,firstname,lastname);


  return (
    
    <div className={styles.Seconddiv} >
           {/* the h1 header */}
           <h1>contact details</h1>
           <form onSubmit={submitHander}>
           {/* <div className = {styles.FormWrapper}> */}
                {/* the title div */}

          <div className= {styles.FormGroup}>
            <label htmlFor="Title">Street + Nr</label>
            <input 
            //  value={title}
            //   onChange={(e)=> Settitle (e.target.value)}
              type="text"
              id="title"
              />
        
          </div>

          
          <div className= {styles.FormGroup}>
            <label htmlFor="Title">Additional Information</label>
            <input 
            //  value={title}
            //   onChange={(e)=> Settitle (e.target.value)}
              type="text"
              id="title"
              />
        
          </div>

          {/* the first and last name div  */}

   <div className={styles.flexBoth}>
   <div className={styles.FormGroup}>
          <label htmlFor="">LastName</label>
          <input
            type="text"
            placeholder=""
            name="lastname"
            value={ lastname}
            onChange={changeHandler}
          />
        </div>
          
          <div className={styles.FormGroup}>
          <label htmlFor="">FirstName</label>
          <input
            type="text"
            placeholder=""
            name="firstname"
            value={firstname}
            onChange={changeHandler}
          />
        </div>
   </div>

   <div className= {styles.FormGroup}>
            <label htmlFor="Title">country</label>
            <input 
            //  value={title}
            //   onChange={(e)=> Settitle (e.target.value)}
              type="text"
              id="title"
              />
        
          </div>

          
          {/* the first and last name div  */}

   <div className={styles.flexBoth}>
   <div className={styles.FormGroup}>
          <label htmlFor="password">password</label>
          <input
            type="password"
            placeholder=""
            name="password"
            value={password}
            onChange={changeHandler}
          />
        </div>
          <div className= {styles.FormGroup}>
            <label htmlFor="Title">phone number</label>
            <input 
            //  value={firstname}
            //   onChange={(e)=> setFirstName (e.target.value)}
              type="text"
              id="Name"
              />
          </div>
   </div>

   
   <div className= {styles.FormGroup}>
            <label htmlFor="Title">your email</label>
            <input 
            //  value={title}
            //   onChange={(e)=> Settitle (e.target.value)}
              type="text"
              id="title"
              />
        
          </div>


          <div className={styles.terms}>
      
            <input 
            //  value={title}
            //   onChange={(e)=> Settitle (e.target.value)}
              type="checkbox"
              id="title"
              />
                  {/* <label htmlFor="Title">I do accept the <a href="">The Trems and Condition </a>of your site</label> */}
          </div>
          <div className= {styles.FormGroup}>
          
          <button 
    
          className={styles.button}>register badge </button>
          </div>
          </form>
           </div>
    // </div>

  )
}

export default Form