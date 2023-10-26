import React from 'react';
import {Routes, Route} from "react-router-dom";
import Home from './Screens/Home';
import About from './Screens/About';
import Contact from './Screens/Contact';
import App from './Screens/App';
import Service from './Screens/Service';
import Layout from './Components/Layout/Layout';


function Router() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout>
            <Home />
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
        path="/Contact"
        element={
          <Layout>
            <Contact />
          </Layout>
        }
      />

      <Route
        path="/App"
        element={
          <Layout>
            <App />
          </Layout>
        }
      />
      
      <Route
        path="/Service"
        element={
          <Layout>
            <Service />
          </Layout>
        }
      />
    </Routes>
  );
}

export default Router
