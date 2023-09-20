import { useContext } from "react";
import { GlobalContext } from "../../context";
import styles from "./Quantity.module.css";

function Quantity({ id, qty, price }) {
  const { manageCartQtyReq, allCartItems } = useContext(GlobalContext);
//  console.log(qty, " quantiyiyiiy")
  const manageCartHandler = async (type) => {
    let newQty = qty;
    if (type === "increment") {
      newQty = qty + 1;
    } else if (type === "decrement" && qty > 0) {
      newQty = qty - 1;
    }

    await manageCartQtyReq({ id, qty: newQty, price });
    allCartItems();
  }; 

  return (
    <div className={styles.button}>
      <div className="mx-auto flex h-8 items-stretch text-gray-600">
        <button
          onClick={() => manageCartHandler("decrement")}
          className="flex items-center justify-center rounded-l-md bg-gray-200 px-4 transition hover:bg-black hover:text-white"
        >
          <p>-</p>
        </button>
        <div className={styles.qty}>
          <p>{qty}</p>
        </div>
        <button
          onClick={() => manageCartHandler("increment")}
          className="flex items-center justify-center rounded-r-md bg-gray-200 px-4 transition hover:bg-black hover:text-white"
        >
          <p>+</p>
        </button>
      </div>
    </div>
  );
}

export default Quantity;
