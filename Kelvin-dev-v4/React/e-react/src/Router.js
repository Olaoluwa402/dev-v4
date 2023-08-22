import React from "react";
import { Routes, Route } from "react-router-dom";
import Wishlistscreen from "./screens/wishlistscreen";
import Accountscreen from "./screens/Accountscreen";
// import Layout from "./components/layout/Layout";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Wishlistscreen />} />
      <Route path="/accountscreen" element={<Accountscreen />} />
    </Routes>
  );
}

export default Router;
