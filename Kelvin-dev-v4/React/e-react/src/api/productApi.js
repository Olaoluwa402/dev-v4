import axios from "axios";

export const getProductsReq = async () => {
  const url = `http://localhost:3004/products`;
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

export const getProductDataById = async (id) => {
  const url = `http://localhost:3004/products/${id}`;
  try {
    const { data } = await axios.get(url);
    console.log(`data ${id} data`);
    return data;
  } catch (err) {
    console.log(err.message);
  }
};
