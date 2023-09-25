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


    export const getProductByIdReq = async(id) => {
      const url = `http://localhost:3004/products/${id}`;
      const config = {
        header : {
            "context-Type" : "apllication/json",
        },

      };
      try {
        const {data} = await axios.get(url, config);
        console.log(data, "dataB");
        return data;
      }
      catch (err){
        console.log(err, "err")
      }

    };
