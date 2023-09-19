import axios from "axios";
import { toast } from "react-toastify";

export const addToCartReq = async ({ id, title, qty, product_img, price }) => {
  const url = `http://localhost:4000/carts`;
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

    toast.success("Product added to cart");
    return data;
  } catch (err) {
    console.log(err, "err");
    toast.error(err);
  }
};

export const allCartItemsReq = async () => {
  const url = `http://localhost:4000/carts`;
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
    toast.error(err);
  }
};

export const findCartByIdReq = async (id) => {
  const url = `http://localhost:4000/carts`;
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
    toast.error(err);
  }
};

export const manageCartQtyReq = async (id, qty, price) => {
  const url = `http://localhost:4000/carts/${id}`;
  console.log(price, "price");
  const totlaProductPrice = `NGN${+price.replace("NGN", "") * qty}`;
  const config = {
    headers: {
      "Context-Type": "Application/json",
    },
  };
  try {
    const foundCart = await findCartByIdReq(id);
    if (!foundCart) {
      toast.error("Not found");
    }
    const { data } = await axios.patch(
      url,
      { qty: qty, priceTotal: totlaProductPrice },
      config
    );

    return data;
  } catch (err) {
    console.log(err, "err");
    toast.error(err);
  }
};

export const clearCartItemsReq = async () => {
  const url = `http://localhost:4000/products`;
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
    toast.error(err);
  }
};

export const cartTotalReq = async () => {
  const url = `http://localhost:4000/products`;
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
    toast.error(err);
  }
};
