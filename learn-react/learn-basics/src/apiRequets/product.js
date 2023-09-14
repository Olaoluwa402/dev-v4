import axios from "axios";

export const getProductsReq = async () => {
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
  }
};

export const getProductByIdReq = async (id) => {
  const url = `http://localhost:4000/products/${id}`;
  const config = {
    headers: {
      "Context-Type": "Application/json",
    },
  };
  try {
    const { data } = await axios.get(url, config);
    console.log(data, "product");
    return data;
  } catch (err) {
    console.log(err, "err");
  }
};
