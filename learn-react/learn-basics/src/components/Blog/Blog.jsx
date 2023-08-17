import React from "react";
import Title from "../Title/Title";
import styles from "./Blog.module.css";

const Blog = ({ blogData }) => {
  return (
    <div className={`${styles.container} container`}>
      {/* header title */}
      <Title />
      <div className={styles.blog__articles}>
        {blogData && blogData.length > 0 ? (
          blogData.map((item) => (
            <div key={item.id} className={styles.blog__article}>
              <h4>{item.title}</h4>
              <p>{item.desc}</p>
            </div>
          ))
        ) : (
          <h2>No blog artile yet</h2>
        )}
      </div>
    </div>
  );
};

export default Blog;
