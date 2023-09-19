import axios from "axios";

const cartUrl = "http://localhost:3004/carts";

export const getCart = async () => {
  try {
    const { data } = await axios.get(cartUrl);
    // console.log(data);
    return data;
  } catch (err) {
    console.log(err.message);
  }
};

export const addToCartHandler = async ({
  id,
  title,
  price,
  stock,
  product_img,
  desc,
}) => {
  try {
    const { data } = await axios.post(cartUrl, {
      id,
      title,
      qty,
      product_img,
      price,
      userId: 1,
    });

    alert("Product added to cart");
    return data;
  } catch (err) {
    console.log(err, "err");
    alert(err);
    return;
  }
};
