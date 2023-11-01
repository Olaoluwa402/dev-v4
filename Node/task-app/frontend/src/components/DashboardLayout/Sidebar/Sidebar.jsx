import React from "react";
import { Link } from "react-router-dom";
import styles from "./Sidebar.module.css";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";

import { logout } from "../../../redux/actions/userAction";

const Sidebar = () => {
  const dispatch = useDispatch();
  function logoutHandler() {
    dispatch(logout());
  }
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

          <li>
            <button onClick={logoutHandler}>logout</button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
