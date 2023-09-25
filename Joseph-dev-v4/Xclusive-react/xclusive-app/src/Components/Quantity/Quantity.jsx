import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../../context";
import styles from "./Quantity.module.css";
import {BeatLoader} from 'react-spinners';

function Quantity({ id, qty, price }) {
  const { manageCartQtyReq, isLoadingHandler, allCartItems, getCarts } =
    useContext(GlobalContext);

    useEffect(() => {
      getCarts();
    },[])
  //  console.log(qty, " quantiyiyiiy")
  // const [active, setActive] = useState({
  //   id: null,
  //   type: null,
  // });
  // const [isLoading, setIsLoading] = useState (false)
  const manageCartHandler = async (type,id,qty,price) => {
    // isLoadingHandler("manageCart", true);

    if (type === "increment") {
      qty = qty + 1;
      await manageCartQtyReq(id, qty, price);
      await getCarts();
      //set loading back to true when action starts
      // isLoadingHandler("manageCart", false);
    } else if(qty == 1) {
         qty = qty;
     } else {
        qty = qty - 1;
      }

      await manageCartQtyReq(id, qty, price);

      await getCarts();

      isLoadingHandler("manageCart", false);
    
  };

  return (
    <div className={styles.button}>
      <div className={styles.container}>
        <button
          onClick={() => manageCartHandler("decrement", id,qty,price)}
          className="flex items-center justify-center rounded-l-md bg-gray-200 px-4 transition hover:bg-black hover:text-white"
        >
            -
        </button>
        <div className={styles.qty}>
          {qty}
        </div>
        <button
          onClick={() => manageCartHandler("increment",id,qty,price)}
          className="flex items-center justify-center rounded-r-md bg-gray-200 px-4 transition hover:bg-black hover:text-white"
        >
          
            +
          
        </button>
      </div>
    </div>
  );
}

export default Quantity;
