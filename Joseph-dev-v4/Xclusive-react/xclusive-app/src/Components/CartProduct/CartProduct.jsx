import React, { useEffect, useState, useContext } from "react";
import styles from "./CartProduct.module.css";
import { GlobalContext } from "../../context";
import Quantity from "../Quantity/Quantity";
import { Link } from "react-router-dom";


const CartProduct = () => {
  const { allCartItems, manageCartQtyReq, carts, getCarts } = useContext(GlobalContext);
  console.log(carts, "Data");

  useEffect(() => {
    allCartItems();
    manageCartQtyReq();
  }, []);

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

      // isLoadingHandler("manageCart", false);
    
  };

  // const manageCartHandler = async (type, id, qty, price) => {
  //   if (type === "increment") {
  //     qty = qty + 1;
  //     await manageCartQtyReq(id, qty, price);
  //     allCartItems();
  //   } else {
  //     qty = qty - 1;
  //     await manageCartQtyReq(id, qty, price);
  //     allCartItems();
  //   }
  // };

  return (
    <div className={styles.modal_container}>
      <div className={styles.modal_inner}>
        {/* <p className={styles.modal_close}>&times;</p> */}
        <div className={styles.page_title}>
          <h4>Home</h4>
          <h4>/</h4>
          <p>Cart</p>
        </div>
        <table>
          <thead>
            <tr className={styles.heading}>
              <th>Product</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Pricetotal</th>
              <th>Remove</th>
            </tr>
          </thead>

          <tbody id={styles.cartBody}>
            {carts && carts.length > 0 ? (
              carts.map(({ image, id, title, price, qty, priceTotal }) => (
                <tr>
                  <td className={styles.product_data}>
                    <img
                      src={image}
                      style={{ width: "90px", height: "90px" }}
                      alt="product Image"
                    />
                    <p>{title}</p>
                  </td>
                  <td className={styles.prices}>
                    <p>${price}</p>
                  </td>
                  <td className={styles.qty}>
                    <div className={styles.button}>
                      <div className={styles.container}>
                        <button
                          onClick={() =>
                            manageCartHandler("decrement", id, qty, price)
                          }
                          className="flex items-center justify-center rounded-l-md bg-gray-200 px-4 transition hover:bg-black hover:text-white"
                        >
                          -
                        </button>
                        <div className={styles.qty}>{qty}</div>
                        <button
                          onClick={() =>
                            manageCartHandler("increment", id, qty, price)
                          }
                          className="flex items-center justify-center rounded-r-md bg-gray-200 px-4 transition hover:bg-black hover:text-white"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </td>
                  <td className={styles.prices}>
                    <p>${priceTotal}</p>
                  </td>
                  <td>
                    <button
                      className={styles.btn_delete}
                      style={{
                        border: "1px solid",
                        borderRadius: "5px",
                        background: "rgb(43, 43, 70)",
                        width: "150px",
                        height: "40px",
                        color: "white",
                      }}
                    >
                      <span>Delete</span>
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <h2>Your cart is empty</h2>
            )}
            {/* <tr>
              <td className={styles.product_data}>
                <img src="https://res.cloudinary.com/dfeyofjln/image/upload/v1691701800/red-keypad_nnqcv3.png" style= {{width:"90px", height:"90px"}} alt="H1 Gamepad" />
                <p>H1 Gamepad</p>
              </td>
              <td>$550</td>
              <td className={styles.qty}>
                <Color />
              </td>
              <td>$1100</td>
              <td>
                <button className= {styles.btn_delete} style={{ border: '1px solid', borderRadius : "5px", background: 'rgb(43, 43, 70)', width: '150px', height: '40px', color: 'white' }}>
                  <span>Delete</span>
                </button>
              </td>
            </tr> */}
          </tbody>
        </table>
        <div className={styles.action_button}>
          <button>
            <a href="#">Return To Shop</a>
          </button>
          <button>
            <a href="#">Update Cart</a>
          </button>
        </div>
        <div className={styles.checkout_foot}>
          <input type="text" placeholder="Coupon Code" />
          <a href="#">
            <button type="submit">
              <p>Apply Coupon</p>
            </button>
          </a>
          <ul className={styles.total}>
            <h4>Cart Total</h4>
            <li>
              <p>Subtotal:</p>
              <p className={styles.cart_subtotal}>$1750</p>
            </li>
            <hr />
            <li>
              <p>Shipping:</p>
              <p>Free</p>
            </li>
            <hr />
            <li>
              <p>Total:</p>
              <p className={styles.cart_subtotal}>$1750</p>
            </li>
            <Link to="/checkout">
              <button className={styles.proceedbtn}>Proceed to checkout</button>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CartProduct;
