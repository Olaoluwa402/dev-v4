import React from "react";
import Title from "../../Title/Title";
import Box3 from "../Box3/Box3";
import styles from "./Products.module.css";

const Products = ({ products }) => {
  return (
    <div className={styles.container}>
      
        {products && products.length > 0 ? (
          products.map((product) => 
          <Box3 key={product.id} product={product} />)
        ) : (
          <Title title="No product added" />
        )}
      
    </div>
  );
};

export default Products;
