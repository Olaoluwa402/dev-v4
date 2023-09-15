import React from "react";
import { Chart } from "react-google-charts";

const ChartDoughnut = () => {
  const data = [
    ["Task", "Hours per Day"],
    ["Work", 7],
    ["Eat", 2],
    ["Commute", 2],
    // CSS-style declaration
  ];

  const options = {
    title: "Traffic source",
    pieHole: 0.4,
    colors: ["blue", "green", "orange"],
    is3D: false,
    backgroundColor: "transparent",
    legend: { position: "none" },
  };

  return (
    <Chart
      chartType="PieChart"
      width="100%"
      height="400px"
      data={data}
      options={options}
    />
  );
};

export default ChartDoughnut;
