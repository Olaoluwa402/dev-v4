import React from "react";
import styles from "./TrafficChart.module.css";
import Chart from "react-google-charts";
import {IoMdDesktop} from 'react-icons/io'
import {BsTablet} from 'react-icons/bs'
import {BsTelephoneFill} from 'react-icons/bs'

const TrafficChart = () => {
  const data = [
    ["Devices", "Traffic"],
    ["Desktop", 63],
    ["Tablet", 15],
    ["Phone", 22],
  ];
  console.log(data);

  const options = {
    // title: "Traffic Source",
    pieHole: 0.6,
    subtiltle: "Sales, Expenses, and profit: 2014-2017",
    is3D: false,
    colors: ["blue", "green", "Orange"],
    backgroundColor: "transparent",
    legend: { position: "none" },
  };

  return (
    <div className={styles.donut}>
      <h3>Traffic Source</h3>
      <div className={styles.traffic}>
        <Chart
          chartType="PieChart"
          width="400px"
          height="400px"
          data={data}
          legendToggle
          options={options}
        />
      </div>
      <div className={styles.bottom}>
        <div>
          <IoMdDesktop />
          <h4>Desktop</h4>
          <p>63%</p>
        </div>
        <div>
          <BsTablet />
          <h4>Tablet</h4>
          <p>15%</p>
        </div>
        <div>
          <BsTelephoneFill />
          <h4>Phone</h4>
          <p>22%</p>
        </div>
        
      </div>
    </div>
  );
};

export default TrafficChart;
