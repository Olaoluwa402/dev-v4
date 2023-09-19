import { Routes,Route,Navigate } from "react-router-dom";   
import AboutScreen from "./screens/About/About";
import SignupScreen from "./screens/Signup/Signup";
import DashboardScreen from "./screens/Dashboard/Dashboard";
import HomeScreen from "./screens/Home/Home";
import ContactScreen from "./screens/Contact/Contact";
import Layout from "./components/layout/Layout";


const Router = () => {
  return (
    <Routes>
        <Route path="/" element={
        <Layout>
            <HomeScreen/>
        </Layout>
        
        }
        />
        <Route path="/about" element={
        <Layout>
            <AboutScreen/>
        </Layout>
        
        }
        />
        <Route path="/Signup" element={
        <Layout>
            <SignupScreen/>
        </Layout>
        
        }
        />
        <Route path="/Dashboard" element={
        <Layout>
            <DashboardScreen/>
        </Layout>
        
        }
        />
        <Route path="/Contact" element={
        <Layout>
            <ContactScreen/>
        </Layout>
        
        }
        />
    </Routes>
  )
}

export default Router