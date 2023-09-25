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
import DashboardLayout from './Components/DashboardLayout/Layout'
import Analytics from './Pages/AnalyticsPage'
import Account  from "./Pages/Account"
import Companies from "./Pages/Companies";
import CustomersPage from "./Pages/CustomersPage";
import HomePage from "./Pages/HomePage";
import SingleProductPage from "./Pages/SingleProductPage";
import CheckoutPage from "./Pages/CheckoutPage";
import { ProtectedRoute } from "./Components/Login/ProtectedRoute";





const Router = () => {
  return (
    <Routes>
       <Route
       
       path="/"
       element={ <Layout Item1={Favourite} Item2={Carticon} Item3={User}>
           <HomePage />
           </Layout>
       }
     />
      <Route
       
        path="/wishlist"
        element={ <Layout Item1={Favourite} Item2={Carticon} Item3={User}>
            <WishlistPage />
            </Layout>
        }
      />
      <Route
        path="/about"
        element={
          <Layout Item1={Favourite} Item2={Carticon} Item3={User}>
             <AboutPage />
            </Layout>
           
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
        path="/checkout"
        element={
          <ProtectedRoute>
            <Layout>
            <CheckoutPage />
            </Layout>
          </ProtectedRoute>
        }
      />

     <Route
        path="/home/:productId"
        element={
          <Layout Item1={Favourite} Item2={Carticon} Item3={User} >
            <SingleProductPage />
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
      <Route
        path="/dashboard"
        element={<ProtectedRoute>
          <DashboardLayout />
        </ProtectedRoute> }>
        <Route index element= {<Analytics />} />
        <Route path="overview" element= {<Analytics />} />
        <Route path="customer" element= {<CustomersPage />} />
        <Route path= "account" element= {<Account />} />
        <Route path="company" element= {<Companies />} />
      
      </Route>
      

      <Route path="/cartproducts"
      element={<Cart/>} />

      <Route path="/not-found" element={<NotFound />} />

      <Route path="*" element={<Navigate to="/not-found" />} />
    </Routes>
  );
};

export default Router;
