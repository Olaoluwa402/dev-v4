import React, { useContext } from "react";
import { Link } from "react-router-dom";
import styles from "./Sidebar.module.css";
import { toast } from "react-toastify";
import { GlobalContext } from "../../../context";

const Sidebar = () => {
  const { setUser } = useContext(GlobalContext);
  function logoutHandler() {
    //emptry the user localstorage object
    localStorage.setItem("userInfo", null);
    //empty the use global state
    setUser(null);
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
