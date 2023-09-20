import React, { useContext } from "react";
import styles from "./Box3.module.css";
import { GlobalContext } from "../../../context";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

const Box3 = ({
  product: { id, title, image, price, qty, discount, img, discpercent },
  isfav,
}) => {
  const {
    addToCart,
    allCartItems,
    getCartTotal,
    addToFavourites,
    allFavouriteItems,
    getFavouritesTotal,
  } = useContext(GlobalContext);

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
    const carts = await allCartItems();
    // console.log(carts, "carts");

    // check if product already exist in cart
    const exist = carts.find((prdt) => prdt.id === id || prdt.title === title);
    if (exist) {
      toast.error("product already in cart");
      return;
    }

    // console.log(carts, "Carts")
    addToCart({
      id,
      title,
      image,
      price,
      qty: 1,
      discount,
      img,
      discpercent,
      priceTotal: qty * +price,
    });

    getCartTotal();
  };

  const addToFavouritesHandler = async ({
    id,
    title,
    image,
    price,
    discount,
    img,
    discpercent,
  }) => {
    const favourites = await allFavouriteItems();
    console.log(favourites, "favourites");

    // check if product already exist in cart
    const exist = favourites.find((prdt) => prdt.id === id);
    if (exist) {
      toast.warn("product already in wishlist");
      return;
    }

    // console.log(favourites, "Favourites")
    addToFavourites({
      id,
      title,
      image,
      price,
      discount,
      img,
      discpercent,
      // priceTotal: qty * +price,
    });

    getFavouritesTotal();
  };
  // console.log(addToCart)

  return (
    <div className={styles.topbox}>
      <div className={styles.image}>
        <img src={discpercent} />
      </div>

      <div className={styles.imgs}>
        <div className={styles.topbox_img2}>
          <Link to="#">
            <img
              src="https://res.cloudinary.com/dfeyofjln/image/upload/v1692172730/Wishlist_1_ka87pn.png"
              onClick={() =>
                addToFavouritesHandler({
                  id,
                  title,
                  image,
                  price,
                  qty,
                  discount,
                  img,
                  discpercent,
                })
              }
            ></img>
          </Link>
          <div className={styles.topbox_img}>
            <a href="#">
              <img src={img} />
            </a>
          </div>
        </div>
      </div>

      <div className={styles.wishlist_image}>
        <img src={image} alt="" />
      </div>

      <div className={styles.addtocart}>
        <img
          src="https://res.cloudinary.com/dfeyofjln/image/upload/v1692172726/Cart1_r728vl.png"
          alt="Buy Cart"
        />
        <Link to="#">
          <p
            onClick={() =>
              addToCartHandler({
                id,
                title,
                image,
                price,
                qty,
                discount,
                img,
                discpercent,
              })
            }
          >
            Add to Cart
          </p>
        </Link>
      </div>

      <div className={styles.wishlistitems}>
        <h4>{title}</h4>
        <div className={styles.prices}>
          <p>${price}</p>
          <h5>{discount}</h5>
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
  );
};

export default Box3;
