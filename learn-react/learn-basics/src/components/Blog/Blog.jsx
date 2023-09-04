import React from "react";
import Title from "../Title/Title";
import Article from "../Article/Article";

import styles from "./Blog.module.css";

const Blog = ({ blogData }) => {
  return (
    <div className={`${styles.container} container`}>
      {/* header title */}
      <Title title="Blog" />
      <div className={styles.blog__articles}>
        {blogData && blogData.length > 0 ? (
          blogData.map((item) => <Article key={item.id} item={item} />)
        ) : (
          <h2>No blog artile yet</h2>
        )}
      </div>
    </div>
  );
};

export default Blog;
