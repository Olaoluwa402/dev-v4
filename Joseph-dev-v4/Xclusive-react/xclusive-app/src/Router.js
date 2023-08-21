import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./Pages/Home";
import AboutPage from "./Pages/About";
import NotFound from "./Components/NotFound/NotFound";
import Cart from "./Pages/Cart";
// import Layout from "./Components/Layout/Layout;


const Router = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
            <HomePage />
        }
      />
      <Route
        path="/about"
        element={
            <AboutPage />
        }
      />

      <Route path="/cartproducts"
      element={<Cart/>} />

      <Route path="/not-found" element={<NotFound />} />

      <Route path="*" element={<Navigate to="/not-found" />} />
    </Routes>
  );
};

export default Router;
