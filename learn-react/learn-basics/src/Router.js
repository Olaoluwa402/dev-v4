import { Routes, Route, Navigate } from "react-router-dom";

import {
  HomeScreen,
  AboutScreen,
  NotFound,
  Layout,
  Notifications,
  DashBoardLayout,
  Analytics,
  User,
  Users,
  ProductsScreen,
  CartScreen,
  CheckoutScreen,
  ProtectedRoute,
  FavoriteScreen,
  RegisterScreen,
  LoginScreen,
  SingleProductScreen,
} from "./screens";

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

      <Route
        path="/shop/:productId"
        element={
          <Layout>
            <SingleProductScreen />
          </Layout>
        }
      />

      <Route
        path="/cart"
        element={
          <Layout>
            <CartScreen />
          </Layout>
        }
      />

      <Route
        path="/checkout"
        element={
          <ProtectedRoute>
            <Layout>
              <CheckoutScreen />
            </Layout>
          </ProtectedRoute>
        }
      />

      <Route
        path="/favorites"
        element={
          <Layout>
            <FavoriteScreen />
          </Layout>
        }
      />

      <Route
        path="/register"
        element={
          <Layout>
            <RegisterScreen />
          </Layout>
        }
      />
      <Route
        path="/login"
        element={
          <Layout>
            <LoginScreen />
          </Layout>
        }
      />

      {/* nested route - dashboard */}

      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <DashBoardLayout />
          </ProtectedRoute>
        }
      >
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
