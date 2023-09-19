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
        <NavLink to={"/dashboard"} className={sidebar.a}>
          <li>
            <BsChart className={sidebar.listIcon} />
            Overview
          </li>
        </NavLink>

        <NavLink to={"staff"} className={sidebar.a}>
          <li>
            <HiUsers className={sidebar.listIcon} />
            Staff
          </li>
        </NavLink>
        <NavLink to={"companies"} className={sidebar.a}>
          <li>
            <HiBag className={sidebar.listIcon} />
            Companies
          </li>
        </NavLink>

        <NavLink to={"accounts"} className={sidebar.a}>
          <li>
            <HiUser className={sidebar.listIcon} />
            Account
          </li>
        </NavLink>

        <NavLink className={sidebar.a}>
          <li>
            <BsGear className={sidebar.listIcon} />
            Settings
          </li>
        </NavLink>

        <NavLink className={sidebar.a}>
          <li>
            <BsBagFill className={sidebar.listIcon} />
            Login
          </li>
        </NavLink>

        <NavLink className={sidebar.a}>
          <li>
            <BiSolidUserPlus className={sidebar.listIcon} />
            Register
          </li>
        </NavLink>

        <NavLink className={sidebar.a}>
          <li>
            <HiXCircle className={sidebar.listIcon} />
            Error
          </li>
        </NavLink>
      </ul>
    </div>
  );
};

export default DashSidebar;
