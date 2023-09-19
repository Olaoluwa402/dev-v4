import React from "react";
import Chart from "react-google-charts";

const Piechart = () => {
  const data = [
    ["Task", "Hours per Day"],
    ["Work", 5],
    ["Eat", 2],
    ["Commute", 2],
    // CSS-style declaration
  ];

  const options = {
    title: "Traffic Source",
    pieHole: 0.4,
    is3D: false,
    colors: ["blue", "green", "orange"],
    backgroundColor: "transparent",
    legend: { position: "none" },
  };
  return (
    <div>
      <Chart
        chartType="PieChart"
        width="100%"
        height="400px"
        data={data}
        options={options}
        
      />
    </div>
  );
};

export default Piechart;
