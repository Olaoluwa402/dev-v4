import { useContext } from "react";
import styles from "./Product.module.css";
import { MdOutlineFavorite } from "react-icons/md";
import { FaShopify } from "react-icons/fa";
import { GlobalContext } from "../../../context";
import { toast } from "react-toastify";

const Product = ({
  product: { id, product_img, title, desc, inCart, price },
  isFav,
}) => {
  const { addToCart, addToFavorite, allCartItems, allFavorite, getCartTotal } =
    useContext(GlobalContext);


  const addToCartHandler = async ({ id, title, product_img, price, qty }) => {
    console.log("clicked");
    const carts = await allCartItems();
    //check if product already exist in cart
    const exist = carts.find((prdt) => prdt.id === id);
    if (exist) {
      toast.warn("product already in cart");
      return;
    }
    addToCart({
      id,
      title,
      product_img,
      price,
      qty: 1,
      priceTotal: qty * +price.replace("NGN", ""),
    });
    getCartTotal();
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
    <div className="">
      <div class="relative m-10 flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md">
        {isFav && (
          <MdOutlineFavorite
            className={`${styles.icons} ${styles.fav}`}
            onClick={() =>
              addToFavoriteHandler({ id, title, product_img, price, qty: 1 })
            }
          />
        )}

        <a
          class="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl"
          href="/"
        >
          <img class="object-cover" src={product_img} alt="productimage" />
          <span class="absolute top-0 left-0 m-2 rounded-full bg-black px-2 text-center text-sm font-medium text-white">
            39% OFF
          </span>
        </a>
        <div class="mt-4 px-5 pb-5">
          <a href="/">
            <h5 class="text-xl tracking-tight text-slate-900">{title}</h5>
          </a>
          <div class="mt-2 mb-5 flex items-center justify-between">
            <p>
              <span class="text-3xl font-bold text-slate-900">
                {price.replace("NGN", "$")}
              </span>
              <span class="text-sm text-slate-900 line-through">$10000</span>
            </p>
            <div class="flex items-center">
              <svg
                aria-hidden="true"
                class="h-5 w-5 text-yellow-300"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
              <svg
                aria-hidden="true"
                class="h-5 w-5 text-yellow-300"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
              <svg
                aria-hidden="true"
                class="h-5 w-5 text-yellow-300"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
              <svg
                aria-hidden="true"
                class="h-5 w-5 text-yellow-300"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
              <svg
                aria-hidden="true"
                class="h-5 w-5 text-yellow-300"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
              <span class="mr-2 ml-3 rounded bg-yellow-200 px-2.5 py-0.5 text-xs font-semibold">
                5.0
              </span>
            </div>
          </div>
          <div
            onClick={() =>
              addToCartHandler({ id, title, product_img, price, qty: 1 })
            }
            class="flex items-center justify-center cursor-pointer rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="mr-2 h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            Add to cart
          </div>
        </div>
      </div>

      {/* <div className={styles.card__header}>
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
      </div> */}
    </div>
  );
};

export default Product;
