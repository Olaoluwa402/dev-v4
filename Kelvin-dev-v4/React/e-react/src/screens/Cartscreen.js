import React, { useContext, useState } from "react";
import Cart from "../components/cart/Cart";
import CartCheckout from "../components/cart/CartCheckout";
import { GlobalContext } from "../context";

const Cartscreen = () => {
  const [isCheckout, SetIsCheckout] = useState(false);
  // const { cartData } = useContext(GlobalContext);
  return (
    <div style={{ position: "relative", height: "fit-content" }}>
      {isCheckout ? (
        <CartCheckout checkout={SetIsCheckout} />
      ) : (
        <Cart checkout={SetIsCheckout} />
      )}
    </div>
  );
};

export default Cartscreen;
