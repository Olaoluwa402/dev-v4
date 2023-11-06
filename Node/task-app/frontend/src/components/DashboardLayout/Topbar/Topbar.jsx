import React from "react";
import styles from "./Topbar.module.css";
import { logout } from "../../../redux/actions/userAction";
import { useDispatch } from "react-redux";

const Topbar = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <h4>TaskAPP</h4>{" "}
      <button
        className="bg-slate-500 text-[#fff] font-bold cursor-pointer"
        onClick={() => dispatch(logout())}
      >
        Logout
      </button>
    </div>
  );
};

export default Topbar;
