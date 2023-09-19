import axios from 'axios'

export const getProductsReq = async() => {
    const url = `http://localhost:3004/products`;
    const config = {
        header : {
            "Context-Type" : "Application/json",
        },
    };
      try {
        const {data} = await axios.get(url, config);
        return data;
      }
      catch (err) {
        console.log(err, "err")
      }
    };

