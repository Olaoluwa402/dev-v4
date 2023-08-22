import React from "react";

import Navigation from "../components/Navigation/Navigation";
import Box from "../components/Box/Box";
import BoxContainer from "../components/BoxContainer/BoxContainer";
import Footer from "../components/Footer/Footer";

const Homepage = () => {
        const boxData = [
          {
            id: Math.floor(Math.random() * 1000),
            percent: "-35%",
            // delete: <BsTrash3 />,
            image: "public/Asset/wishlist-asset/guccibag.png",
            productname: "GUCCI DUFFLE BAG",
            price: "$1190",
            discountPrice: " $650",
          },
        ];
  return (
    <div>
      <Navigation />
      {/* <Box /> */}
      <BoxContainer boxData={boxData}/>
      <Footer />
    </div>
  );
};

export default Homepage;