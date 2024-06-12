import React from "react";
import { Routes, Route } from "react-router-dom";
import Homescreen from "./screens/homeScr/Homescreen";
import Wishlistscreen from "./screens/wishlistscreen";
import Accountscreen from "./screens/Accountscreen";
import Layout from "./components/layout/Layout";
import Loginscreen from "./screens/Loginscreen";
import Dashboard from "./screens/dashboardScr/Dashboard";
import Aboutscreen from "./screens/aboutscr/Aboutscreen";
import Contactscreen from "./screens/contactScr/Contactscreen";
import Cartscreen from "./screens/Cartscreen";
import SingleProductScreen from "./screens/SingleProduct";
//
import DashStaff from "./components/dashboard/dash-main/dash-staff/DashStaff";
import MainCompanies from "./components/dashboard/dash-main/main-companies/MainCompanies";
import MainAccounts from "./components/dashboard/dash-main/main-accounts/MainAccounts";
import DashMain from "./components/dashboard/dash-main/main-overview/DashMain";

function Router() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout>
            <Homescreen />
          </Layout>
        }
      />
      <Route
        path="/accountscreen"
        element={
          <Layout>
            <Accountscreen />
          </Layout>
        }
      />
      <Route
        path="/loginscreen"
        element={
          <Layout>
            <Loginscreen />
          </Layout>
        }
      />
      <Route
        path="/about"
        element={
          <Layout>
            <Aboutscreen />
          </Layout>
        }
      />
      <Route
        path="/contact"
        element={
          <Layout>
            <Contactscreen />
          </Layout>
        }
      />

      <Route
        path="/wishlist"
        element={
          <Layout>
            <Wishlistscreen />
          </Layout>
        }
      />

      <Route
        path="/cart"
        element={
          <Layout>
            <Cartscreen />
          </Layout>
        }
      />

      <Route
        path="/products/:productId"
        element={
          <Layout>
            <SingleProductScreen />
          </Layout>
        }
      />

      <Route path="/dashboard" element={<Dashboard />}>
        <Route index element={<DashMain />} />
        <Route path="staff" element={<DashStaff />} />
        <Route path="companies" element={<MainCompanies />} />
        <Route path="accounts" element={<MainAccounts />} />
      </Route>
    </Routes>
  );
}

export default Router;
