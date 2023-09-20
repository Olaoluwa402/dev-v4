import axios from "axios";
import { toast } from "react-toastify";

export const addToCartReq = async ({
  id,
  title,
  image,
  price,
  qty
}) => {
  const url = `http://localhost:3004/cart`;
  const config = {
    header: { "Context-Type": "Application/json" },
  };
  try {
    const { data } = await axios.post(
      url,
      { id, title, image, price, qty, userId: 1 },
      config
    );
    // console.log(data, "data")

    toast.success("Product added to cart");
    return data;
  } catch (err) {
    console.log(err, "err");
  }
};

export const allCartItemsReq = async () => {
  const url = `http://localhost:3004/cart`;
  const config = {
    header: { "Context-Type": "Application/json" },
  };
  try {
    const { data } = await axios.get(url, config);
    // console.log(data, "data");
    return data;
  } catch (err) {
    console.log(err, "err");
  }
};

export const findCartByIdReq = async (id) => {
  const url = `http://localhost:3004/cart`;
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
  const url = `http://localhost:3004/cart/${id}`;
  console.log(price, "price");
  const totalProductPrice = `${+price * qty}`;
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
      { qty: qty, priceTotal: totalProductPrice },
      config
    );

    return data;
  } catch (err) {
    console.log(err, "err");
    toast.error(err);
  }
};


export const incrementCartQtyReq = async () => {
  const url = `http://localhost:3004/cart`;
  const config = {
    header: { "Context-Type": "Application/json" },
  };
  try {
    const { data } = await axios.get(url, config);
    return data;
  } catch (err) {
    console.log(err, "err");
  }
};

export const removeCartItemReq = async () => {
  const url = `http://localhost:3004/cart`;
  const config = {
    header: { "Context-Type": "Application/json" },
  };
  try {
    const { data } = await axios.get(url, config);
    return data;
  } catch (err) {
    console.log(err, "err");
  }
};

export const clearCartItemsReq = async () => {
  const url = `http://localhost:3004/cart`;
  const config = {
    header: { "Context-Type": "Application/json" },
  };
  try {
    const { data } = await axios.get(url, config);
    return data;
  } catch (err) {
    console.log(err, "err");
  }
};

export const cartTotalReq = async () => {
  const url = `http://localhost:3004/cart`;
  const config = {
    header: { "Context-Type": "Application/json" },
  };
  try {
    const { data } = await axios.get(url, config);
    return data;
  } catch (err) {
    console.log(err, "err");
  }
};
