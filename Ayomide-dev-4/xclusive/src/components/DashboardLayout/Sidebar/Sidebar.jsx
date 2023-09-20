import React from "react";
import styles from "./Sidebar.module.css";
import {Link} from 'react-router-dom'
import { CgShapeRhombus } from "react-icons/cg";
import { HiSelector } from "react-icons/hi";
import { VscError } from "react-icons/vsc";
import { BiSolidUserPlus } from "react-icons/bi";
import { BsFillBarChartFill } from "react-icons/bs";
import { HiUser } from "react-icons/hi";
import { PiGearFineBold } from "react-icons/pi";
import { BiLockAlt } from "react-icons/bi";

const Sidebar = () => {
  return (
    <aside className={styles.tabbar}>
      <div className={styles.icon}>
        <CgShapeRhombus />
      </div>
      <div className={styles.dash}>
        <div className={styles.name}>
          <h3>
            Devias
            <span>
              <br />
              Production
            </span>
          </h3>
        </div>
        <div className={styles.cell}>
          <HiSelector />
        </div>
      </div>
      <div className={styles.layers}>
        <li>
          <BsFillBarChartFill />
          Overview
        </li>
        <li>
          <Link to={"/dashboard/customer"}>Customers</Link>
        </li>
        <li>Companies</li>
        <li>
          <HiUser />
          Account
        </li>
        <li>
          <PiGearFineBold />
          Settings
        </li>
        <li>
          <BiLockAlt />
          Login
        </li>
        <li>
          <BiSolidUserPlus />
          Register
        </li>
        <li>
          <VscError />
          Error
        </li>
      </div>
    </aside>
  );
};

export default Sidebar;
