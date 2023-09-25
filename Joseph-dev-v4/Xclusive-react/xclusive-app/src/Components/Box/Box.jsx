import React, {useContext, useState, useEffect} from 'react';
import styles from './Box.module.css';
import { GlobalContext } from '../../context';



const Box = () => {

  const { allFavouriteItems, favourites} = useContext(GlobalContext);
  // console.log(favourites, "fav");

  useEffect(() => {
    allFavouriteItems();
    
  }, []);


  return (
    <div className={styles.wishlistbox}>
      {favourites && favourites.length > 0 ? (
        favourites.map(({id,title,image,price,discount,img,discpercent }) => (
          <div className={styles.topbox}>
            <div className={styles.image}>
                 <img src= {discpercent} />
            </div>
            <div className={styles.topbox_img}>
            
              <a href="#">
                <img src={img} />
              </a>
            </div>

            <div className={styles.wishlist_image}>
              <img src= {image} alt="" />
            </div>
            
            <div className={styles.addtocart}>
              <img src="https://res.cloudinary.com/dfeyofjln/image/upload/v1692172726/Cart1_r728vl.png" alt="Buy Cart" />
              <a href="#">
                <p>Add to Cart</p>
              </a>
            </div>
            
            <div className={styles.wishlistitems}>
              <h4>{title}</h4>
              <div className={styles.prices}>
                <p>${price}</p>
                <h5>{discount}</h5>
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
        <h2>No favourite Added Yet</h2>
      )}
  
    </div>
  );
};

export default Box;
