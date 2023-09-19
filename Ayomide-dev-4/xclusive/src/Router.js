import { Routes, Route } from "react-router-dom";
import Contact from "./screens/Contact";
import Homepage from "./screens/Homepage";
import Signup from "./screens/Signup/Signup";
import About from "./screens/About";
import shop from "./screens/shop";
import Login from "./screens/Signup/Login";
import Layout from "../src/components/Layout/layout";
import DashboardLayout from "./components/DashboardLayout/Layout";
import Analyticspage from "./screens/Analyticspage";
import Customerpage from "./screens/Customerpage";
import Cartshop from "./components/Cart/Cartshop";
import Cartcheck from "./components/Checkout/Cartcheck";

const Router = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout>
            <Homepage />
          </Layout>
        }
      />
      <Route
        path="/signup"
        element={
          <Layout>
            <Signup />
          </Layout>
        }
      />
      <Route
        path="/Login"
        element={
          <Layout>
            <Login />
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
          <Layout>
            <About />
          </Layout>
        }
      />

      <Route
        path="/shop"
        element={
          <Layout>
             <Cartshop />
          </Layout>
           
        
        }
      />

      <Route
        path="/Checkout"
        element={
          <Layout>
            <Cartcheck />
          </Layout>
        }
      />

      <Route path="/dashboard" element={<DashboardLayout />}>
        <Route index element={<Analyticspage />}/>
        <Route path="customer" element={<Customerpage />}/>
       </Route>

    </Routes>
  );
};

export default Router;
