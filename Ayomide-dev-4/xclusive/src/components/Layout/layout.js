import React from "react";
import Navigation from "../Navigation/Navigation";
import Footer from "../Footer/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import layoutStyle from "./Layout.module.css"

function layout({ children }) {
  return (
    <div>
       <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      {/* Same as */}
      <ToastContainer />
      <Navigation />
      <main className={layoutStyle.contentContainer}>{children}</main>
      <Footer />
    </div>
  );
}

export default layout;
