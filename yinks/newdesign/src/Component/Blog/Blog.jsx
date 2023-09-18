import React from 'react'
import styles from "./Blog.module.css"
import Article from '../Article/Article'

const blogData = () => {
  return (
    <div className={`${styles.container} container`}>

    <div className={styles.blog__articles}>
      {blogData && blogData.length > 0 ? (
        blogData.map((item) => <Article key={item.id} item={item} />)
      ) : (
        <h2>No blog artile yet</h2>
      )}
    </div>
    </div>
  )
}

export default blogData