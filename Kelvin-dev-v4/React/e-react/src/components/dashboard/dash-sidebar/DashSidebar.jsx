import React from "react";
import { NavLink } from "react-router-dom";
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
          <NavLink to={"/"}>
            <h5>Devias</h5>
          </NavLink>
          <p>Production</p>
        </div>
      </div>
      <ul>
        <li>
          <NavLink to={"/dashboard"} className={sidebar.a}>
            <BsChart className={sidebar.listIcon} />
            Overview
          </NavLink>
        </li>
        <li>
          <NavLink to={"staff"} className={sidebar.a}>
            <HiUsers className={sidebar.listIcon} />
            Staff
          </NavLink>
        </li>
        <li>
          <NavLink to={"companies"} className={sidebar.a}>
            <HiBag className={sidebar.listIcon} />
            Companies
          </NavLink>
        </li>
        <li>
          <NavLink to={"accounts"} className={sidebar.a}>
            <HiUser className={sidebar.listIcon} />
            Account
          </NavLink>
        </li>
        <li>
          <NavLink className={sidebar.a}>
            <BsGear className={sidebar.listIcon} />
            Settings
          </NavLink>
        </li>
        <li>
          <NavLink className={sidebar.a}>
            <BsBagFill className={sidebar.listIcon} />
            Login
          </NavLink>
        </li>
        <li>
          <NavLink className={sidebar.a}>
            <BiSolidUserPlus className={sidebar.listIcon} />
            Register
          </NavLink>
        </li>
        <li>
          <NavLink className={sidebar.a}>
            <HiXCircle className={sidebar.listIcon} />
            Error
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default DashSidebar;
