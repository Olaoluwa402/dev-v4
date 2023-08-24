import React from "react";
import Advert from "../Adverts/Advert";
import Navigation from "../Navigation/Navigation";
import Wishlist from "../Wishlist/Wishlist";
import Just from "../JustForYou/Just";
import Footer from "../Footer/Footer";


const Layout =()=>{

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
    return (
        <div>
            <Advert/>
            <Navigation/>
            <Wishlist cartsData = {cartsData}/>
            <Just justData ={justData}/>
            <Footer/>
        </div>
    )
}

export default Layout