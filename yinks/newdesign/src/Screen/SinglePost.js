import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Styles from "./SinglePost.module.css"
const SinglePost = () => {
  const [photo, setPhoto] = useState({});
  const { id } = useParams();
 
  useEffect(() => {
    axios.get (`https://jsonplaceholder.typicode.com/photos/${id}`)
    .then(res =>{
      setPhoto(res.data)

      })
      .catch(err =>{

      })
  },
   []);


  return (
    <div className={Styles.container}>
      <h2>{photo.title}</h2>
      {/* <img className={Styles.carddiv} src={photo.url} alt="photo" /> */}
    </div>
  );
};

export default SinglePost