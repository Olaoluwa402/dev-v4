import React from "react"
import Wishlist from "../Components/Wishlist/Wishlist"
import Just from "../Components/JustForYou/Just"
import Contact from "./Contact";

const Home=()=>{
    const cartsData = [
        {
        id: Math.floor(Math.random()*500),
        image: <img src="https://res.cloudinary.com/di9r3toow/image/upload/v1692189521/gucci-bag_xqp3tt.png" alt="" />,
        title: " Gucci Duffle Bag",
        price : "$1900",
        discountedPrice : "$2500",
        images :<img src ="https://res.cloudinary.com/di9r3toow/image/upload/v1692189519/icon-delete_tgkhpf.png" alt=""/>,
        },

        {
            id: Math.floor(Math.random()*500),
            image: <img src="https://res.cloudinary.com/di9r3toow/image/upload/v1692189521/gucci-bag_xqp3tt.png" alt="" />,
            title: " Gucci Duffle Bag",
            price : "$1900",
            discountedPrice : "$2500",
            images :<img src ="https://res.cloudinary.com/di9r3toow/image/upload/v1692189519/icon-delete_tgkhpf.png" alt=""/>,
        },
        

            {
                id: Math.floor(Math.random()*500),
                image: <img src="https://res.cloudinary.com/di9r3toow/image/upload/v1692189521/gucci-bag_xqp3tt.png" alt="" />,
                title: " Gucci Duffle Bag",
                price : "$1900",
                discountedPrice : "$2500",
                images :<img src ="https://res.cloudinary.com/di9r3toow/image/upload/v1692189519/icon-delete_tgkhpf.png" alt=""/>,
            },
                
                {
                    id: Math.floor(Math.random()*500),
                    image: <img src="https://res.cloudinary.com/di9r3toow/image/upload/v1692189521/gucci-bag_xqp3tt.png" alt="" />,
                    title: " Gucci Duffle Bag",
                    price : "$1900",
                    discountedPrice : "$2500",
                    images :<img src ="https://res.cloudinary.com/di9r3toow/image/upload/v1692189519/icon-delete_tgkhpf.png" alt=""/>,
                    },
    ];

    const justData = [
        {
        id: Math.floor(Math.random()*500),
        image: <img src="https://res.cloudinary.com/di9r3toow/image/upload/v1692189519/game-pad_aawumm.png" alt="" />,
        title: " Dual Shock Pad",
        price : "$1900",
        discountedPrice : "$2500",
        images :<img src ="https://res.cloudinary.com/di9r3toow/image/upload/v1692189521/Quick_View_b5z8if.png" alt=""/>,
        },

        {
            id: Math.floor(Math.random()*500),
            image: <img src="https://res.cloudinary.com/di9r3toow/image/upload/v1692189519/game-pad_aawumm.png" alt="" />,
            title: " Dual Shock Pad",
            price : "$1900",
            discountedPrice : "$2500",
            images :<img src ="https://res.cloudinary.com/di9r3toow/image/upload/v1692189521/Quick_View_b5z8if.png" alt=""/>,
        },
        

            {
                id: Math.floor(Math.random()*500),
                image: <img src="https://res.cloudinary.com/di9r3toow/image/upload/v1692189519/game-pad_aawumm.png" alt="" />,
                title: " Dual Shock Pad",
                price : "$1900",
                discountedPrice : "$2500",
                images :<img src ="https://res.cloudinary.com/di9r3toow/image/upload/v1692189521/Quick_View_b5z8if.png" alt=""/>,
            },
                
                {
                    id: Math.floor(Math.random()*500),
                    image: <img src="https://res.cloudinary.com/di9r3toow/image/upload/v1692189519/game-pad_aawumm.png" alt="" />,
                    title: " Dual Shock Pad",
                    price : "$1900",
                    discountedPrice : "$2500",
                    images :<img src ="https://res.cloudinary.com/di9r3toow/image/upload/v1692189521/Quick_View_b5z8if.png" alt=""/>,
                    },
    ];
    return(
        <div>
            <Contact/>
            <Wishlist cartsData = {cartsData}/>
            <Just justData ={justData}/>
        </div>
    )
}

export default Home