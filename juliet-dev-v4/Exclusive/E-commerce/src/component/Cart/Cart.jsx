import React from "react";
import styles from "./Cart.module.css";
import { Link } from "react-router-dom";
import { Selected } from '../CartContent/Data'
import Cartcontent from "../CartContent/Cartcontent";

function Cart() {
  return (
    <div>
      <div className={styles.modal_item}>
        <div className={styles.spann}>
          <span >Home / </span>
          <span>Cart</span>
        </div>

        <div className={styles.items}>
          <div className={styles.product_items}>
            <ul>
              <li>Product</li>
              <li>Price</li>
              <li>Quantity</li>
              <li>Subtotal</li>
            </ul>
          </div>
          <div >
            
            {Selected && Selected.map((items)=>{
              return <Cartcontent key={items.id} content={items}/>
            })}
            </div>

          <div className={styles.modal_ibtn}>
            <button>Return To Shop</button>
            <button>Update Cart</button>
          </div>
          <div className={styles.checkout_flexed}>
            <div className={styles.inner_check}>
              <input type="text" placeholder="Coupon Code" />
              <a href="/">
                <button>Apply Coupon</button>
              </a>
            </div>
            <div className={styles.checkout}>
              <h5>Cart Total</h5>
              <div className={styles.subtotal}>
                <p>Subtotal</p>
                <p>$1750</p>
              </div>
              <hr />
              <div className={styles.subtotal}>
                <p>Shipping</p>
                <p>Free</p>
              </div>
              <hr />
              <div className={styles.subtotal}>
                <p>Total</p>
                <p>$1750</p>
              </div>
              <Link to="/checkout">
                <button className="proceedbtn">Process To Checkout</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
