import React from "react";
import Chart from "react-google-charts";

const ChartBar = () => {
  const data = [
    ["Month", "Sales", "Expenses"],
    ["Jan", 1000, 400],
    ["Feb", 1170, 460],
    ["Mar", 660, 1120],
    ["Apr", 1030, 540],
    ["May", 1750, 1530],
    ["Jun", 1990, 2010],
    ["Jul", 930, 740],
    ["Aug", 1460, 1090],
    ["Sep", 1000, 840],
    ["Oct", 1620, 1870],
    ["Nov", 850, 900],
    ["Dec", 730, 640],
  ];

  const options = {
    chart: {
      title: "Company Performance",
      subtitle: "Sales, Expenses, and Profit: 2014-2017",
    },
    colors: ["#6316FF", "#D9C7FF"],
    backgroundColor: "transparent",
    legend: { position: "none" },
  };
  return (
    <div>
      <Chart
        chartType="ColumnChart"
        width="100%"
        height="400px"
        data={data}
        options={options}
      />
    </div>
  );
};

export default ChartBar;
