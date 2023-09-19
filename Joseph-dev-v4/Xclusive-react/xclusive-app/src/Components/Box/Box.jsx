import React from 'react';
import styles from './Box.module.css';


const Box = ({ boxData }) => {
  return (
    <div className={styles.wishlistbox}>
      {boxData && boxData.length > 0 ? (
        boxData.map((item) => (
          <div key={item.id} className={styles.topbox}>
            <div className={styles.image}>
                 <img src= {item.discpercent} />
            </div>
            <div className={styles.topbox_img}>
            
              <a href="#">
                <img src={item.img} />
              </a>
            </div>

            <div className={styles.wishlist_image}>
              <img src= {item.image} alt="" />
            </div>
            
            <div className={styles.addtocart}>
              <img src="https://res.cloudinary.com/dfeyofjln/image/upload/v1692172726/Cart1_r728vl.png" alt="Buy Cart" />
              <a href="#">
                <p>Add to Cart</p>
              </a>
            </div>
            
            <div className={styles.wishlistitems}>
              <h4>{item.title}</h4>
              <div className={styles.prices}>
                <p>${item.price}</p>
                <h5>{item.discount}</h5>
              </div>
            </div>
            <div className={styles.wishlistitems}>
          <ul>
                    <li><img src="https://res.cloudinary.com/dfeyofjln/image/upload/v1692172730/Vector_1_whbdxf.png" /></li>
                    <li><img src="https://res.cloudinary.com/dfeyofjln/image/upload/v1692172730/Vector_1_whbdxf.png" /></li>
                    <li><img src="https://res.cloudinary.com/dfeyofjln/image/upload/v1692172730/Vector_1_whbdxf.png" /></li>
                    <li><img src="https://res.cloudinary.com/dfeyofjln/image/upload/v1692172730/Vector_1_whbdxf.png" /></li>
                    <li><img src="https://res.cloudinary.com/dfeyofjln/image/upload/v1692172730/Vector_1_whbdxf.png" /></li>
                    <li>(65)</li>
         </ul>
        
     </div>
          </div>
        ))
      ) : (
        <h2>No Product Added Yet</h2>
      )}
  
    </div>
  );
};

export default Box;
