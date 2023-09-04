import styles from "./Product.module.css";
import { MdOutlineFavorite } from "react-icons/md";
import { FaShopify } from "react-icons/fa";

const Product = ({ product: { product_img, title, desc, inCart, price } }) => {
  return (
    <div className={styles.container}>
      <div className={styles.card__header}>
        <img src={product_img} alt={title} />
      </div>
      <div className={styles.card__body}></div>
      <div className={styles.card__footer}>
        <div className="card__footer-left">
          <MdOutlineFavorite className={styles.icons} />
        </div>
        <div className="card__footer-right">
          <FaShopify className={styles.icons} />
        </div>
      </div>
    </div>
  );
};

export default Product;
