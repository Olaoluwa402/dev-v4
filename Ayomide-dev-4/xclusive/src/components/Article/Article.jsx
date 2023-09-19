import React from 'react'
import styles from './Article.module.css';

const Article = ({item}) => {
  return (
    <div className={styles.blog__article}>
      <h5>{item.firstname}</h5>
      <h5>{item.email}</h5>
      <h5>{item.password}</h5>
    </div>
  );
};

export default Article;
