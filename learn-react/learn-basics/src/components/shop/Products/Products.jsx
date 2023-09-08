import React from "react";
import Title from "../../Title/Title";
import Product from "../Product/Product";

import styles from "./Product.module.css";
const Products = ({ products }) => {
  return (
    <div className={styles.container}>
      {products && products.length > 0 ? (
        products.map((product) => (
          <Product key={product.id} product={product} />
        ))
      ) : (
        <Title title="No products" />
      )}
    </div>
  );
};

export default Products;
