import { useContext } from "react";
import styles from "./Product.module.css";
import { MdOutlineFavorite } from "react-icons/md";
import { FaShopify } from "react-icons/fa";
import { GlobalContext } from "../../../context";
import { toast } from "react-toastify";

const Product = ({
  product: { id, product_img, title, desc, inCart, price },
}) => {
  const { addToCart, addToFavorite, allCartItems, allFavorite } =
    useContext(GlobalContext);

  const addToCartHandler = async ({ id, title, product_img, price, qty }) => {
    const carts = await allCartItems();
    //check if product already exist in cart
    const exist = carts.find((prdt) => prdt.id === id);
    if (exist) {
      toast.warn("product already in cart");
      return;
    }
    addToCart({ id, title, product_img, price, qty: 1 });
  };

  const addToFavoriteHandler = async ({
    id,
    title,
    product_img,
    price,
    qty,
  }) => {
    const whishlist = await allFavorite();
    //check if product already exist in cart
    const exist = whishlist.find((prdt) => prdt.id === id);
    if (exist) {
      toast.warn("product already in wishlist");
      return;
    }
    addToFavorite({ id, title, product_img, price, qty: 1 });
  };
  return (
    <div className={styles.container}>
      <div className={styles.card__header}>
        <img src={product_img} alt={title} />
      </div>
      <div className={styles.card__body}></div>
      <div className={styles.card__footer}>
        <div className="card__footer-left">
          <MdOutlineFavorite
            className={styles.icons}
            onClick={() =>
              addToFavoriteHandler({ id, title, product_img, price, qty: 1 })
            }
          />
        </div>
        <div className="card__footer-right">
          <FaShopify
            className={styles.icons}
            onClick={() =>
              addToCartHandler({ id, title, product_img, price, qty: 1 })
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Product;
