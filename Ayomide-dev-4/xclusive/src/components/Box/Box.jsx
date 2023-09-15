import React , {useContext}from "react";
import styles from "./Box.module.css";
import { BsTrash3 } from "react-icons/bs";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { GlobalContext } from "../../context";
import { toast } from "react-toastify";
import { allCartItemsReq } from "../../apiRequets";



const Box =  ({boxData: { id, product_img, title, desc, inCart, price }}) => {
  const {addToCart} = useContext(GlobalContext)


  const addToCartHandler = async ({ id, title, product_img, price, qty = 1 }) => {
    const carts = await allCartItemsReq();
    console.log(carts)
    //check if product already exist in cart
    const exist = carts.find((prdt) => prdt.id === id);
    if (exist) {
      toast.warn("product already in cart");
      return;
    }
    addToCart({ id, title, product_img, price, qty: 1 });
  };
  return (
    <div className={styles.wishsection}>
      {/* {boxData && boxData.length > 0 ? (boxData.map((item) => (
        <div key={item.id} className={styles.wishlisttab1}>
          <div className={styles.tabmain}>
            <div className={styles.tab1}>
              <p>{item.percent}</p>
              <div className={styles.trash}>
                <p>
                  {item.delete}
                </p>
              </div>
            </div>
            <img src={item.image} className={styles.pic} alt="" />
            <button className={styles.cartbtn}>
              <AiOutlineShoppingCart /> Add to cart
            </button>
          </div>
          <div className={styles.nameprice}>
            {item.productname} <br />
            <span style={{ color: "#db4444" }}>
              {item.price}
              <span className="spa" style={{ color: "#000000" }}>
                {item.discountPrice}
              </span>
            </span>
          </div>
        </div>
      ))
      ): (<h2>No Product Added</h2>)
      } */}


      {/* {products && products.length > 0 ? (boxData.map((item) => ( */}
        <div className={styles.wishlisttab1}>
          <div className={styles.tabmain}>
            <div className={styles.tab1}>
              {/* <p>{item.percent}</p> */}
              <div className={styles.trash}>
                {/* <p>
                  {item.delete}
                </p> */}
              </div>
            </div>
            <img src={product_img} className={styles.pic} alt="" />
            <button className={styles.cartbtn}
            onClick={() =>
              addToCartHandler({ id, title, product_img, price, qty : 1 })
            }>
              <AiOutlineShoppingCart /> Add to cart
            </button>
          </div>
          <div className={styles.nameprice}>
            {title} <br />
            <span style={{ color: "#db4444" }}>
              {price}
              <span className="spa" style={{ color: "#000000" }}>
                {/* {item.discountPrice} */}
              </span>
            </span>
          </div>
        </div>
      {/* ))
      ): (<h2>No Product Added</h2>)
      } */}
    </div>
    );
};
 
export default Box;
