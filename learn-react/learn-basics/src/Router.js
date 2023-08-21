import { Routes, Route, Navigate } from "react-router-dom";
import HomeScreen from "./screens/Home";
import AboutScreen from "./screens/About";
import NotFound from "./screens/NotFound";
import Layout from "./components/Layout/Layout";

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
      
    

      <Route path="/not-found" element={<NotFound />} />

      <Route path="*" element={<Navigate to="/not-found" />} />
    </Routes>
  );
};

export default Router;
