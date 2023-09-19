import axios from "axios";

export const createOrderReq = async () => {
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
