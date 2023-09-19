import axios from "axios";

const wishlistUrl = "http://localhost:3004/wishlists";

export const getWishlist = async () => {
  try {
    const { data } = await axios.get(wishlistUrl);
    return data;
  } catch (err) {
    console.log(err.message);
  }
};

export const addToWishlistHandler = async ({
  id,
  title,
  price,
  qty,
  product_img,
  desc,
}) => {
  try {
    const { data } = await axios.post(wishlistUrl, {
      id,
      title,
      price,
      qty,
      product_img,
      desc,
      userId: 1,
    });

    return data;
  } catch (err) {
    console.log(err, "err");
    return;
  }
};
