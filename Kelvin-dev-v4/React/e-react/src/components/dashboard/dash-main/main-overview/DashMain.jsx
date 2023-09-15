import React from "react";
import ChartDoughnut from "../../../charts/ChartDoughnut";
import ChartBar from "../../../charts/ChartBar";
import dashmain from "./DashMain.module.css";

function DashMain() {
  return (
    <div>
      <div>
        <div>
          <div>
            <div>
              <p>BUDGET</p>
              <h1>$21k</h1>
            </div>
          </div>
        </div>
      </div>
      <div className={dashmain.charts}>
        <div className={dashmain.bar}>
          <ChartBar />
        </div>
        <div className={dashmain.donut}>
          <ChartDoughnut />
        </div>
      </div>
    </div>
  );
}

export default DashMain;
