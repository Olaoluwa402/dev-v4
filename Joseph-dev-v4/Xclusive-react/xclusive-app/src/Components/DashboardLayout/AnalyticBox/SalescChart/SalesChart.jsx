import React from "react";
import styles from "./SalesChart.module.css";
import { LiaSyncSolid } from "react-icons/lia";
import Chart from "react-google-charts";

const SalesChart = () => {
  const data = [
    ["Months", "Sales", "Expenses"],
    ["Jan", 18000, 11000],
    ["Feb", 15000, 10500],
    ["Mar", 5000, 3000],
    ["Apr", 8500, 6500],
    ["May", 3500, 1500],
    ["June", 14000, 8500],
    ["June", 14000, 8500],
    ["Feb", 16000, 10000],
    ["Sep", 16000, 10500],
    ["Oct", 18500, 12500],
    ["Nov", 16500, 12000],
    ["Dec", 20000, 13000],
  ];
  console.log(data);

  const options = {
    chart: {
      title: "Sales Performance",
      subtiltle : "Sales, Expenses, and profit: 2014-2017",
    },
    colors: ["#6316FF", "#D9C7FF"],
    backgroundColor: "transparent",
    legend: {position: "none" },
  };

  return (
    <div className={styles.bar_chart}>
      <div className={styles.bartop}>
        <h4>Sales</h4>
        <div className={styles.sync}>
          <LiaSyncSolid className={styles.syncicon} />
          <span>Sync</span>
        </div>
      </div>
      <div className={styles.barchart}>
        <Chart
          chartType="Bar"
          width="90%"
          height="350px"
          data={data}
            legendToggle
          options={options}
        />
      </div>
    </div>
  );
};

export default SalesChart;
