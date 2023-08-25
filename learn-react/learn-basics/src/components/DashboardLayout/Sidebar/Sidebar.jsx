import React from "react";
import { Link } from "react-router-dom";
import styles from "./Sidebar.module.css";

const Sidebar = () => {
  return (
    <div>
      <Link to="/">COMPANY</Link>
      <nav>
        <ul>
          <li>
            <Link to="/dashboard/notifications">Notifiocations</Link>
          </li>

          <li>
            <Link to="/dashboard/users">Users</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
