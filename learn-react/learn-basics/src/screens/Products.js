import React, { useContext } from "react";
import Products from "../components/shop/Products/Products";
import Title from "../components/Title/Title";
import { GlobalContext } from "../context";

const ProductsScreen = () => {
  const { products } = useContext(GlobalContext);

  return (
    <div>
      <Title title="Products" />
      <Products products={products} />
    </div>
  );
};

export default ProductsScreen;
