import React from 'react'
import Article from '../Article/Article';
import styles from './Blog.module.css';

const Blog = ({blogData}) => {
  return (
    <div className={`${styles.container}cntainer`}>
        <div className={styles.blog__articles}>
            {blogData && blogData.length > 0 ? (
                blogData.map((item) => <Article key ={item.id} item={item} /> )
            ) : (
                <h2>No blog Article yet</h2>
            )};
        </div>
      
    </div>
  )
}

export default Blog;
