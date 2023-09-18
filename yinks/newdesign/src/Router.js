import { Routes, Route, Navigate } from "react-router-dom";
import HomeScreen from "./Screen/Home";
import AboutScreen from "./Screen/About";
import NotFound from "./Screen/NotFound/NotFound";
import PhotosScreen from "./Screen/Photos";
import Layout from "./Component/Layout/Layout";
import SinglePostScreen from "./Screen/SinglePost";
import Users from "./Screen/User";
import Analytics from "./Screen/Analytics";
import DashboardLayout from "./Component/DashboardLayout/Layout/Layout";
import Notifications from "./Screen/Notification";
import User from "./Screen/User";

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
        path="/photos"
        element={
          <Layout>
            <PhotosScreen />
          </Layout>
        }
      />

      <Route
        path="/photos/:id"
        element={
          <Layout>
            <SinglePostScreen />
          </Layout>
        }
      />
      {/* {nested router dashboard} */}
      <Route path="/dashboard" element={<DashboardLayout />}>
        <Route index element={<Analytics />} />
<Layout>
<Route path="users" element={<Users />} /> 
</Layout>
        {/* param dymaic path  */}
         <Route path="users/:id" element={<User />} />
        <Route path="notifications" element={<Notifications />} />
      </Route>

      <Route path="/not-found" element={<NotFound />} />

      <Route path="*" element={<Navigate to="/not-found" />} />
    </Routes>
  );
};

export default Router;
