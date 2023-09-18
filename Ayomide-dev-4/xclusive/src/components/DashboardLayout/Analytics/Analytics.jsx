import React from "react";
import styles from "./Analytics.module.css";
import { BsArrowUp } from "react-icons/bs";
import { BiDollar } from "react-icons/bi";
import { HiUsers } from "react-icons/hi";
import { BsArrowDown } from "react-icons/bs";
import { BsListTask } from "react-icons/bs";
import Graph from "../../Graph/Graph";
import Piechart from "../../Piechart/Piechart";
import { LiaSyncAltSolid } from "react-icons/lia";
import Gadgets from "../../Gadgets/Gadgets";

const Analytics = () => {
  return (
    <div className={styles.me}>
      <div className={styles.boxes}>
        <div className={styles.boxcard}>
          <div className={styles.budget}>
            <div className={styles.card}>
              <h5>BUDGET</h5>
              <b>$24k</b>
            </div>
            <div className={styles.icon}>
              <div className={styles.circle}>
                <BiDollar className={styles.doll} />
              </div>
            </div>
          </div>
          <p>
            <BsArrowUp className={styles.arrow} />
            <span style={{ color: "green" }}>12%</span> Since last month
          </p>
        </div>
        <div className={styles.boxcard}>
          <div className={styles.budget}>
            <div className={styles.card}>
              <h5>TOTAL CUSTOMERS</h5>
              <b>1.6k</b>
            </div>
            <div className={styles.icons}>
              <div className={styles.circles}>
                <HiUsers className={styles.user} />
              </div>
            </div>
          </div>
          <p>
            <BsArrowDown className={styles.arrow1} />
            <span style={{ color: "red" }}>16%</span> Since last month
          </p>
        </div>
        <div className={styles.boxcard}>
          <div className={styles.budget}>
            <div className={styles.card}>
              <h5>TASK PROGRESS</h5>
              <b>75.5%</b>
            </div>
            <div className={styles.icon1}>
              <div className={styles.circle1}>
                <BsListTask className={styles.task} />
              </div>
            </div>
          </div>
          <p>line</p>
        </div>
        <div className={styles.boxcard}>
          <div className={styles.budget}>
            <div className={styles.card}>
              <h5>TOTAL PROFIT</h5>
              <b>$15k</b>
            </div>
            <div className={styles.icon2}>
              <div className={styles.circle2}>
                <BiDollar />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.chartsection}>
        <div className={styles.graph}>
          <div className={styles.graphtext}>
            <b>Sales</b>
            <p>
              <LiaSyncAltSolid />
              sync
            </p>
          </div>
          <div className={styles.graph1}>
            <Graph />
          </div>
        </div>
        <div className={styles.chart}>
          <Piechart />
          <Gadgets />
        </div>
      </div>
    </div>
  );
};

export default Analytics;
