import React from "react";
import {
  BsFillBarChartFill as BsChart,
  BsGearWideConnected as BsGear,
  BsBagFill,
} from "react-icons/bs";
import {
  HiUsers,
  HiShoppingBag as HiBag,
  HiUser,
  HiXCircle,
} from "react-icons/hi";
import { BiSolidUserPlus } from "react-icons/bi";

import sidebar from "./DashSidebar.module.css";

const DashSidebar = () => {
  return (
    <div className={sidebar.container}>
      <div>
        <div>
          <h5>Devias</h5>
          <p>Production</p>
        </div>
      </div>
      <ul>
        <li>
          <BsChart className={sidebar.listIcon} />
          Overview
        </li>
        <li>
          <HiUsers className={sidebar.listIcon} />
          Customers
        </li>
        <li>
          <HiBag className={sidebar.listIcon} />
          Companies
        </li>
        <li>
          <HiUser className={sidebar.listIcon} />
          Account
        </li>
        <li>
          <BsGear className={sidebar.listIcon} />
          Settings
        </li>
        <li>
          <BsBagFill className={sidebar.listIcon} />
          Login
        </li>
        <li>
          <BiSolidUserPlus className={sidebar.listIcon} />
          Register
        </li>
        <li>
          <HiXCircle className={sidebar.listIcon} />
          Error
        </li>
      </ul>
    </div>
  );
};

export default DashSidebar;
