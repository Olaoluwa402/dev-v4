import React from "react";

import Navigation from "./components/Navigation/Navigation";
// import Box from "./components/Box/Box";
import BoxContainer from "./components/BoxContainer/BoxContainer";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <div>
      <Navigation />
      <BoxContainer/>
      <Footer />
    </div>
  );
};

export default App;
