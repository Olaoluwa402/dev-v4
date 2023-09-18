import React, { useEffect, useState } from "react";
import axios from "axios"
import { Link, useParams } from "react-router-dom";
import styles from "./Photos.module.css"



const PhotosScreen = () => {
  const [Post, setPost] = useState([])
  useEffect(() =>{
    axios.get("https://jsonplaceholder.typicode.com/photos")
    .then(res =>{
      setPost(res.data)
    })
    .catch(err =>{

    })
  },
  []);
  const listposts = Post.slice (0,15)
  
  return (
    <div className={styles.container}>
  <h2>posts</h2>
  { listposts.length > 0 ? listposts.map((post) =>(
  <Link key={post.id} to={`/post/${post.id}`}>
        <div className={styles.carddiv} src={post.url} alt="photo" />
  </Link>
  
  ))
  : "No Phots yet"}
    </div>
  )
}

export default PhotosScreen