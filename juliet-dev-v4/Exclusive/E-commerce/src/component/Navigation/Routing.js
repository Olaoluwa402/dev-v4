import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Nav from "./Nav";
// import Advert from "../Advertisment/Advert";
// import Footer from "../Footer/Footer";
import Home from "../Home/Home";
import Contact from "../Contact/Contact";
import About from "../About/About";
import SignUp from "../Sign-Up/SignUp";
import Error from "../Error/Error";
import HeroPage from "../Wishlist/Hero";
import Cart from "../Cart/Cart";
import Shop from "../Shop/Shop";
import LoginPage from "../Login/Login";
import Checkout from "../Checkout/Checkout";
import Account from "../Account/Account";
import Layout from "../Layout/Layout";
import BuyCart from "../BuyCart/BuyCart";
import Favourite from "../Favourite/Favourite";
import User from "../User/User";

const Routing = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <Layout Favourite={Favourite} BuyCart={BuyCart}>
                <Home />
              </Layout>
            }
          />
          <Route
            path="/Contact"
            element={
              <Layout>
                <Contact />
              </Layout>
            }
          />
          <Route
            path="/About"
            element={
              <Layout Favourite={Favourite} BuyCart={BuyCart} User={User}>
                <About />
              </Layout>
            }
          />
          <Route
            path="/SignUp"
            element={
              <Layout>
                <SignUp />
              </Layout>
            }
          />
          <Route
            path="*"
            element={
              <Layout>
                <Error />
              </Layout>
            }
          />
          <Route
            path="/HeroPage"
            element={
              <Layout Favourite={Favourite} BuyCart={BuyCart} User={User}>
                <HeroPage />
              </Layout>
            }
          />
          <Route
            path="/Cart"
            element={
              <Layout Favourite={Favourite} BuyCart={BuyCart} User={User}>
                <Cart />
              </Layout>
            }
          />
          <Route
            path="/Shop"
            element={
              <Layout>
                <Shop />
              </Layout>
            }
          />
          <Route
            path="/Login"
            element={
              <Layout>
                <LoginPage />
              </Layout>
            }
          />
          <Route
            path="/Checkout"
            element={
              <Layout Favourite={Favourite} BuyCart={BuyCart} User={User}>
                <Checkout />
              </Layout>
            }
          />
          <Route
            path="/Account"
            element={
              <Layout Favourite={Favourite} BuyCart={BuyCart} User={User} >
                <Account />
              </Layout>
            }
          />
        </Routes>
      </Router>
    </div>
  );
};

export default Routing;
