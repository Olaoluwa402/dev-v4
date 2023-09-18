import React from "react";
import { BiSearch } from "react-icons/bi";
import { HiUsers, HiBell } from "react-icons/hi";
import dashnav from "./DashNavbar.module.css";

const DashNavbar = () => {
  return (
    <div className={dashnav.container}>
      <div className={dashnav.search_input}>
        <BiSearch />
        <input type="search" name="" id="" placeholder="Search for anything" />
      </div>
      <div className={dashnav.nav_details}>
        <HiUsers />
        <HiBell />
      </div>
    </div>
  );
};

export default DashNavbar;
