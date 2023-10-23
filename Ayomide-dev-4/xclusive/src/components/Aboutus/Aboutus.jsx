import React, {useContext} from "react";
import { GlobalContext } from "../../screens/Context";
import styles from "./Aboutus.module.css";
import Blog from '../Blog/Blog';
import { blogData } from "../Data";

const Aboutus = () => {
  const {blogData} = useContext(GlobalContext);
  return (
    <div className={styles.container}>
      <h3>Home / About</h3>
      <Blog blogData ={blogData} />
    </div>
  );
};

export default Aboutus;
