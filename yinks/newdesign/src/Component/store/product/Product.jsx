import styles from "./Product.module.css"

const Product = ({ product:{id,product_img,price,inCart,desc,title} }) => {
  return (
    <div className={styles.container}>
      <div className={styles.card__header}>
        <img src={product_img} alt={title} />
      </div>
      
      </div>

  );
};

export default Product;
