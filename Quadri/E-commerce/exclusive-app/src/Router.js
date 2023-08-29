import React from "react";
import{Routes,Route} from "react-router-dom";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import Layout from "./Components/Layout/Layout";


const Router=()=>{
    return (
        <Routes>
            <Route
            path="/"
            element={
                <Layout>
                    <Home/>
                </Layout>
            }
            />

            <Route
            path="/contact"
            element={
                
                    <Contact/>
            
            }
            
            />
        </Routes>
    );
};

export default Router