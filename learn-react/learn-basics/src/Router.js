import { Routes, Route, Navigate } from "react-router-dom";
import HomeScreen from "./screens/Home";
import AboutScreen from "./screens/About";
import NotFound from "./screens/NotFound";
import Layout from "./components/Layout/Layout";
import Notifications from "./screens/Notifications";
import Users from "./screens/Users";
import Analytics from "./screens/Analytics";
import User from "./screens/User";
import DashboardLayout from "./components/DashboardLayout/Layout.jsx";
import ProductsScreen from "./screens/Products";

const Router = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout>
            <HomeScreen />
          </Layout>
        }
      />
      <Route
        path="/about"
        element={
          <Layout>
            <AboutScreen />
          </Layout>
        }
      />

      <Route
        path="/posts"
        element={
          <Layout>
            <AboutScreen />
          </Layout>
        }
      />

      <Route
        path="/posts/:id"
        element={
          <Layout>
            <AboutScreen />
          </Layout>
        }
      />

      <Route
        path="/shop"
        element={
          <Layout>
            <ProductsScreen />
          </Layout>
        }
      />

      {/* nested route - dashboard */}
      <Route path="/dashboard" element={<DashboardLayout />}>
        <Route index element={<Analytics />} />
        <Route path="users" element={<Users />} />
        {/* param dymaic path */}
        <Route path="users/:id" element={<User />} />
        <Route path="notifications" element={<Notifications />} />
      </Route>
      {/* end of nested routes */}

      <Route path="/not-found" element={<NotFound />} />

      <Route path="*" element={<Navigate to="/not-found" />} />
    </Routes>
  );
};

export default Router;
