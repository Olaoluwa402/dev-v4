import axios from 'axios';
import {toast} from "react-toastify"


export const addToCartReq = async ({id, title, image,price, qty, discount, img, discpercent}) => {
    const url = `http://localhost:3004/carts`;
    const config = {
        header: { "Context-Type": "Application/json",
        },
    };
    try {
        const { data } = await axios.post(
          url,
          { id, title, image,price, qty, discount, img, discpercent, userId: 1 },
          config
        );
    
        toast.success("Product added to cart");
        return data;
      } catch (err) {
        console.log(err, "err");
      
    }

};

export const allCartItemsReq = async () => {
    const url = `http://localhost:3004/carts`;
    const config = {
        header: { "Context-Type": "Application/json",
        },
    };
    try {
        const { data } = await axios.get(url, config);
        return data;
      } catch (err) {
        console.log(err, "err");
      
    }
};

export const incrementCartQtyReq = async () => {
    const url = `http://localhost:3004/carts`;
    const config = {
        header: { "Context-Type": "Application/json",
        },
    };
    try {
        const { data } = await axios.get(url, config);
        return data;
      } catch (err) {
        console.log(err, "err");
      
    }
}

export const removeCartItemReq = async () => {
    const url = `http://localhost:3004/carts`;
    const config = {
        header: { "Context-Type": "Application/json",
        },
    };
    try {
        const { data } = await axios.get(url, config);
        return data;
      } catch (err) {
        console.log(err, "err");
      
    }
}

export const clearCartItemsReq = async () => {
    const url = `http://localhost:3004/carts`;
    const config = {
        header: { "Context-Type": "Application/json",
        },
    };
    try {
        const { data } = await axios.get(url, config);
        return data;
      } catch (err) {
        console.log(err, "err");
      
    }
}

export const cartTotalReq = async () => {
    const url = `http://localhost:3004/carts`;
    const config = {
        header: { "Context-Type": "Application/json",
        },
    };
    try {
        const { data } = await axios.get(url, config);
        return data;
      } catch (err) {
        console.log(err, "err");
      
    }

}

