import React from "react";
import Title from "../Title/Title";
import Article from "../Article/Article";

import styles from "./Blog.module.css";

<<<<<<< HEAD
const Blog = () => {
=======
const Blog = ({ blogData }) => {
>>>>>>> 5e6adb2fbea827f9c2209df5a63f17d9128ca21c
  return (
    <div className={styles.container}>
      {/* header title */}
<<<<<<< HEAD
      <h2>Blog</h2>
=======
      <Title />
      <div className={styles.blog__articles}>
        {blogData && blogData.length > 0 ? (
          blogData.map((item) => <Article key={item.id} item={item} />)
        ) : (
          <h2>No blog artile yet</h2>
        )}
      </div>
>>>>>>> 5e6adb2fbea827f9c2209df5a63f17d9128ca21c
    </div>
  );
};

export default Blog;
