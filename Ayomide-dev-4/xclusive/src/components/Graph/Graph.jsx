import React from "react";
import Chart from "react-google-charts";

const Graph = () => {
  const data = [
    ["month", "Sales", "Expenses"],
    ["Jan", 1000, 400],
    ["Feb", 1170, 460],
    ["Mar", 660, 1120],
    ["Apr", 1030, 540],
    ["May", 1430, 740],
    ["Jun", 1230, 1040],
    ["Jul", 830, 540],
    ["Aug", 1730, 1540],
    ["Sep", 630, 540],
    ["Oct", 1030, 540],
    ["Nov", 930, 1070],
    ["Dec", 1930, 1800],
  ];

  const options = {
    colors: ["blue", "lightBlue"],
    legend: { position: "none" },
  };
  return (
    <div>
      <Chart
        chartType="Bar"
        width="100%"
        height="400px"
        data={data}
        options={options}
       


      />
    </div>
  );
};

export default Graph;
