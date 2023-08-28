import React from "react";
import { Routes, Route } from "react-router-dom";
import Wishlistscreen from "./screens/wishlistscreen";
import Accountscreen from "./screens/Accountscreen";
import Layout from "./components/layout/Layout";
import Loginscreen from "./screens/Loginscreen";
import Dashboard from "./screens/dashboardScr/Dashboard";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
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
    </Routes>
  );
}

export default Router;
