import React from 'react'
import styles from "./Article.module.css"
function Article({item}) {
  return (
  
          <div className={styles.blog__article}>
      <h4>{item.title}</h4>
      <p>{item.desc}</p>
    </div>
  )
}

export default Article