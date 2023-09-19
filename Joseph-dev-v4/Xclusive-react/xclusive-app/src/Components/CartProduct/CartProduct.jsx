import React from 'react';
import styles from './CartProduct.module.css';

const CartProduct = () => {
  return (
    <div className={styles.modal_container}>
      <div className={styles.modal_inner}>
        <p className={styles.modal_close}>&times;</p>
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
              <th>Subtotal</th>
              <th>Remove</th>
            </tr>
          </thead>

          <tbody id={styles.cartBody}>
            <tr>
              <td className={styles.product_data}>
                <img src="https://res.cloudinary.com/dfeyofjln/image/upload/v1691701799/television_ybro3a.png" style= {{width:"90px", height:"90px"}} alt="LCD Monitor" />
                <p>LCD Monitor</p>
              </td>
              <td>$650</td>
              <td>
                <input type="number" value="01" min="01" max="100" />
              </td>
              <td>$650</td>
              <td>
                <button className= {styles.btn_delete} style={{ border: '1px solid', borderRadius : "5px", background: 'rgb(43, 43, 70)', width: '150px', height: '40px', color: 'white' }}>
                  <span>Delete</span>
                </button>
              </td>
            </tr>
            <tr>
              <td className={styles.product_data}>
                <img src="https://res.cloudinary.com/dfeyofjln/image/upload/v1691701800/red-keypad_nnqcv3.png" style= {{width:"90px", height:"90px"}} alt="H1 Gamepad" />
                <p>H1 Gamepad</p>
              </td>
              <td>$550</td>
              <td>
                <input type="number" value="02" min="01" max="100" />
              </td>
              <td>$1100</td>
              <td>
                <button className= {styles.btn_delete} style={{ border: '1px solid', borderRadius : "5px", background: 'rgb(43, 43, 70)', width: '150px', height: '40px', color: 'white' }}>
                  <span>Delete</span>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
        <div className={styles.action_button}>
          <button><a href="#">Return To Shop</a></button>
          <button><a href="#">Update Cart</a></button>
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
              <p className= {styles.cart_subtotal}>$1750</p>
            </li>
            <button className={styles.proceedbtn}>Proceed to checkout</button>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default CartProduct;
