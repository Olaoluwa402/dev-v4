import React, { useState, useEffect } from "react";
import LoginRegister from "../components/Auth/LoginRegister/LoginRegister";

import styles from "./Home.module.css";

export const HomeScreen = () => {
  useEffect(() => {}, []);

  return (
    <div>
      <LoginRegister login="login" />
    </div>
  );
};

export default HomeScreen;
