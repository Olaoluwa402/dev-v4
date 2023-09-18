import React from "react";
import Title from "../../Title/Title";
import Product from "../product/Product";

const Products = ({ products }) => {
  return (
    <div>
      {products && products.length > 0 ? (
       products.map ((product) => (
          <Product key={product.id} product={product} />
        ))
      ) : (
        <Title title="No products" />
      )}
    </div>
  );
};

export default Products;
