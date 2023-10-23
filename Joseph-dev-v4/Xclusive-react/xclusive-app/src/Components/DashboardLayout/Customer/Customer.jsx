// import styles from "./Customer.module.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "./Customer.module.css";

const Customer = () => {

  useEffect(() => {
    
    getPosts()
  }, []);

  const [posts, setPosts] = useState([])
  const getPosts = () => {
    return axios
       .get("http://localhost:3004/posts")
       .then((response) => {
         setPosts(response.data );
         console.log(response.data)
       })
       .catch((error) => {
         console.error("Error fetching data:", error);
       });
     };
  return (
    <div className={styles.container}>
      <div className={styles.inner_container}>
        <h3>List of Registered Customers</h3>
        <div className={styles.listitems}>
            <ul>
              {posts.map((post) => (
                <li key={post.id}>
                  <h3>Name:{post.name}</h3> 
                  <h3>Email: {post.email}</h3>
                  <h3>Password: {post.password}</h3>
                </li>
              ))}
            </ul>
      </div>
    </div>
    </div>
  );
};

export default Customer;
