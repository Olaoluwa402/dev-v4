import axios from "axios";

export const addToFavoriteReq = async () => {
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
