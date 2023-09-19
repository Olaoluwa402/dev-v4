import React from "react";
import styles from "./AnalyticBox.module.css";
import { BiDollar } from "react-icons/bi";
import { BsArrowDown, BsArrowUp } from "react-icons/bs";
import { HiUsers } from "react-icons/hi";
import { BsListTask } from "react-icons/bs";
// import { LiaSyncSolid } from "react-icons/lia";
import SalesChart from "./SalescChart/SalesChart";
import TrafficChart from "./TrafficChart/TrafficChart";

// import { Bar } from "react-chartjs-2";
const AnalyticBox = () => {
  return (
    <div className={styles.container}>
      <div className={styles.boxcontainer}>
        <div className={styles.box}>
          <div className={styles.topbox}>
            <div className={styles.toptext}>
              <h4>BUDGET</h4>
              <p>$24K</p>
            </div>
            <div className={styles.outtericon}>
              <div className={styles.innericon}>
                <BiDollar className={styles.icon} />
              </div>
            </div>
          </div>
          <div className={styles.bottombox}>
            <div className={styles.icon2}>
              <BsArrowUp />
              <p>12%</p>
            </div>

            <span>Since last month</span>
          </div>
        </div>
        <div className={styles.box}>
          <div className={styles.topbox}>
            <div className={styles.toptext}>
              <h4>TOTAL CUSTOMERS</h4>
              <p>1.6K</p>
            </div>
            <div className={styles.outtericons}>
              <HiUsers className={styles.icons} />
            </div>
          </div>
          <div className={styles.bottombox}>
            <div className={styles.icon2}>
              <BsArrowDown />
              <p>16%</p>
            </div>

            <span>Since last month</span>
          </div>
        </div>
        <div className={styles.box}>
          <div className={styles.topbox}>
            <div className={styles.toptext}>
              <h4>TASK PROGRESS</h4>
              <p>75.5%</p>
            </div>
            <div className={styles.outtericon}>
              <BsListTask className={styles.icon} />
            </div>
          </div>
          <div className={styles.bottombox}>
            <div className={styles.icon2}>
              <BsArrowUp />
              <p>12%</p>
            </div>
            <span>Since last month</span>
          </div>
        </div>
        <div className={styles.box}>
          <div className={styles.topbox}>
            <div className={styles.toptext}>
              <h4>TOTAL PROFIT</h4>
              <p>$15K</p>
            </div>
            <div className={styles.outtericon}>
              <div className={styles.innericon}>
                <BiDollar className={styles.icon} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.charts}> 
        <div className={styles.sales}>
          <SalesChart />
        </div>
        <div className={styles.traffic}>
          <TrafficChart />
        </div>
      </div>
    </div>
  );
};

export default AnalyticBox;
