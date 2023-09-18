import React from 'react'
import styles from './Products.module.css'

const Products = ({productData}) => {
  return (
    <div className={styles.container}>
        {productData && productData.length > 0 ? (
         productData.map((item) => (
            <div key={item.id} className={styles.innercontainer}>
                <div className={styles.container_img}>
                 <img src={item.image}/>
                </div>
                <h4>{item.title}</h4>
                <p>${item.price}</p>
                <p>${item.discount}
                </p>
            </div>
          ))
        ) : (
          <h2>No product yet</h2>
        )}
      </div>
  );
}

export default Products;
 