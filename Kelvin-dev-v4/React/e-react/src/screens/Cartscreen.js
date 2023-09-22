import React, { useContext } from "react";
import Cart from "../components/cart/Cart";
import { GlobalContext } from "../context";

const Cartscreen = () => {
  const { cartData } = useContext(GlobalContext);
  return (
    <div style={{ position: "relative", height: "fit-content" }}>
      <Cart cartData={cartData} />
    </div>
  );
};

export default Cartscreen;
