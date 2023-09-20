import React, { useContext, useEffect } from "react";
import Title from "../../Title/Title";
import { GlobalContext } from "../../../context";
import Product from "../Product/Product";
import styles from "./Favorites.module.css";

const Favorites = () => {
  const { favorites, allFavorite } = useContext(GlobalContext);
  console.log(favorites, "allFavorite");

  useEffect(() => {
    allFavorite();
  }, []);
  
  return (
    <div>
      <Title title="Favorites" />
      <div className={styles.container}>
        {favorites && favorites.length > 0 ? (
          favorites.map((product) => (
            <Product key={product.id} product={product} isFav={false} />
          ))
        ) : (
          <Title title="No favorites" />
        )}
      </div>
    </div>
  );
};

export default Favorites;
