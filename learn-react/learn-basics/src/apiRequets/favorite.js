import axios from "axios";
import { toast } from "react-toastify";

export const addToFavoriteReq = async ({
  id,
  title,
  qty,
  product_img,
  price,
}) => {
  const url = `http://localhost:4000/wishlists`;
  const config = {
    headers: {
      "Context-Type": "Application/json",
    },
  };
  try {
    const { data } = await axios.post(
      url,
      { id, title, qty, product_img, price, userId: 1 },
      config
    );

    toast.success("Product added to wishlist");
    return data;
  } catch (err) {
    console.log(err, "err");
    toast.error(err.message);
  }
};

export const allFavoriteItemsReq = async () => {
  const url = `http://localhost:4000/wishlists`;
  const config = {
    headers: {
      "Context-Type": "Application/json",
    },
  };
  try {
    const { data } = await axios.get(url, config);
    return data;
  } catch (err) {
    console.log(err, "err");
    toast.error(err.message);
  }
};
