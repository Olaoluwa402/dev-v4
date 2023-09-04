import React from "react";
import DashSidebar from "../../components/dashboard/dash-sidebar/DashSidebar";
import DashNavbar from "../../components/dashboard/dash-navbar/DashNavbar.jsx";
import dashboard from "./Dashboard.module.css";
import { Outlet } from "react-router-dom";

function Dashboard() {
  return (
    <div className={dashboard.container}>
      <DashSidebar className={dashboard.side} />
      <div className={dashboard.top_mainContainer}>
        <DashNavbar className={dashboard.top} />
        {/* <DashMain className={dashboard.main} /> */}
        <main className={dashboard.main}>{<Outlet />}</main>
      </div>
    </div>
  );
}

export default Dashboard;
