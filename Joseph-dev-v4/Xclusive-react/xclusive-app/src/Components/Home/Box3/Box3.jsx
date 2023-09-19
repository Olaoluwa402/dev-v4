import { useContext } from "react";
import styles from "./Box3.module.css";
import { GlobalContext } from "../../../context";
import { allCartItemsReq } from "../../../apiCalls/cart";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

const Box3 = ({ products }) => {
  
  const { addToCart } = useContext(GlobalContext);

  const addToCartHandler = async ({
    id,
    title,
    image,
    price,
    qty,
    discount,
    img,
    discpercent,
  }) => {
    const carts = await allCartItemsReq();
    //check if product already exist in cart
    const exist = carts.find((prdt) => prdt.id === id);
    if (exist) {
      toast.warn("product already in cart");
      return;
    }
    addToCart({ id, title, image, price, qty: 1, discount, img, discpercent });
  };

  return (
    <div className={styles.wishlistbox}>
      {products && products.length > 0 ? (
        products.map((item) => (
          <div key={item.id} className={styles.topbox}>
            <div className={styles.image}>
              <img src={item.discpercent} />
            </div>
            <div className={styles.topbox_img}>
              <a href="#">
                <img src={item.img2}></img>
              </a>

              <a href="#">
                <img src={item.img} />
              </a>
            </div>

            <div className={styles.wishlist_image}>
              <img src={item.image} alt="" />
            </div>

            <div className={styles.addtocart}>
              <img
                src="https://res.cloudinary.com/dfeyofjln/image/upload/v1692172726/Cart1_r728vl.png"
                alt="Buy Cart"
              />
              <Link to="/cart">
                <p
                  onClick={() =>
                    addToCartHandler({
                      id: item.id,
                      title: item.title,
                      image: item.image,
                      price: item.price,
                      qty: 1,
                      discount: item.discount,
                      img: item.img,
                      discpercent: item.discpercent,
                    })
                  }
                >
                  Add to Cart
                </p>
              </Link>
            </div>

            <div className={styles.wishlistitems}>
              <h4>{item.title}</h4>
              <div className={styles.prices}>
                <p>${item.price}</p>
                <h5>{item.discount}</h5>
              </div>
            </div>
            <div className={styles.wishlistitems}>
              <ul>
                <li>
                  <img src="https://res.cloudinary.com/dfeyofjln/image/upload/v1692172730/Vector_1_whbdxf.png" />
                </li>
                <li>
                  <img src="https://res.cloudinary.com/dfeyofjln/image/upload/v1692172730/Vector_1_whbdxf.png" />
                </li>
                <li>
                  <img src="https://res.cloudinary.com/dfeyofjln/image/upload/v1692172730/Vector_1_whbdxf.png" />
                </li>
                <li>
                  <img src="https://res.cloudinary.com/dfeyofjln/image/upload/v1692172730/Vector_1_whbdxf.png" />
                </li>
                <li>
                  <img src="https://res.cloudinary.com/dfeyofjln/image/upload/v1692172730/Vector_1_whbdxf.png" />
                </li>
                <li>(65)</li>
              </ul>
            </div>
          </div>
        ))
      ) : (
        <h2>No Product Added Yet</h2>
      )}
    </div>
  );
};

export default Box3;
