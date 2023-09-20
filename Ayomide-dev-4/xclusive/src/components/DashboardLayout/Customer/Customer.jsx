import axios from "axios";
import React, { useEffect, useState , useContext} from "react";
import styles from "./Customer.module.css";


const Customer = () => {
  
  useEffect(() => {
    const getPosts = () => {
      
      
        return axios
        .get("http://localhost:3004/posts")
        .then((response) => {
          setPosts(response.data);
          console.log(response.data);
        })
        .catch((error) => {
          console.error("error fetching data:", error);
        });
    };
    getPosts();
  }, []);

  const [posts, setPosts] = useState([]);

  return (
    <div className={styles.container}>
      <div className={styles.container1}>
        <h3>List of Registered Customers</h3>
        <div className={styles.listitems}>
          <ul>
            {posts.map((post) => (
              <li key={post.id}>
                <h3>Name:{post.FirstName}</h3>
                <h3>Email:{post.Email}</h3>
                <h3>Password:{post.Password}</h3>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <post/>
    </div>
    
    
  );
};

export default Customer;
