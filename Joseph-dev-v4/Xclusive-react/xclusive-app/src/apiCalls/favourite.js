
import { toast } from "react-toastify";
import axios from "axios";

export const addToFavouritesReq = async({
    id,
    title,
    image,
    price,
    qty,
    discount,
    img,
    discpercent
}) => {
    const url = `http://localhost:3004/wishlists`;
    const config = {
        header: {
            "context-Type": "application/json",        
        },
    };
    try{
        const data = await axios.post(
            url,
            {id,title,image,price,qty,discount,img,discpercent}, 
            config
        );
        toast.success("Product added to wishlist");
        return data;
    } catch(err) {
        console.log(err, "err");
        toast.error(err.message)
    }

};

export const allFavouriteItemsReq = async () => {
    const url = `http://localhost:3004/wishlists`;
    const config = {
        header : {
            "context-Type" : "Application/json",
        },
        
    };
    try {
        const {data} = await axios.get(url, config);
        return data;
    } catch (err) {
        console.log(err, "err");
        toast.err(err.message)
    }
};