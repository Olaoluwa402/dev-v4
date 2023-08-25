import { Routes, Route, Navigate } from "react-router-dom";
import WishlistPage from "./Pages/Wishlist";
import AboutPage from "./Pages/About";
import NotFound from "./Components/NotFound/NotFound";
import Cart from "./Pages/Cart";
import SignUp from "./Components/SignUp/SignUp";
import LoginPage from "./Pages/LoginPage";
import ContactPage from "./Pages/ContactPage";
import Layout from "./Components/Layout/Layout";
// import Layout from "./Components/Layout/Layout;
import Favourite from "./Components/Navigation/Favourite/Favourite";
import Carticon from "./Components/Navigation/Carticon/Carticon";
import User from "./Components/Navigation/User/User";
import Plus from "./Components/Navigation/Plus/Plus";
import ColourPage from "./Pages/ColourPage";




const Router = () => {
  return (
    <Routes>
      <Route
       
        path="/wishlist"
        element={ <Layout Item1={Favourite} Item2={Carticon} Item3={User} Item4={Plus}>
            <WishlistPage />
            </Layout>
        }
      />
      <Route
        path="/about"
        element={
            <AboutPage />
        }
      />
      <Route
        path="/colour"
        element={
            <ColourPage />
        }
      />
      <Route
        path="/signup"
        element={
          <Layout>
            <SignUp />
            </Layout>
        }
      />
      <Route
        path="/login"
        element={
          <Layout>
            <LoginPage />
          </Layout>
        }
      />
      <Route
        path="/contact"
        element={
            <ContactPage />
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
