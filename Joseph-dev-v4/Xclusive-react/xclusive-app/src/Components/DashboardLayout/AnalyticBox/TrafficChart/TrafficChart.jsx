import React from 'react'
import styles from './TrafficChart.module.css'
import {Charts as ChartJS, ArcElement, Tooltip, Legend} from 'chart.js'
import {Doughnut} from 'react-chartjs-2'

const TrafficChart = () => {
    ChartJS.register(ArcElement, Tooltip, Legend);
    const data = {
        labels: ["Desktop", "Tablet", "Phone"],
        dataset: [{
            label:"# of Likes",
            data:[63, 15, 22],
            backgroundcolor: [
                "rgb(54, 162, 235)",
                "rgb(255, 205, 86)",
                "rgb(255, 159, 64)"
            ],
        },
    ],
    };

  return (
    <div>
        <div className={styles.bottom}>
          <div className={styles.bars}></div>
        </div>
        <div className={styles.donut}>
          <h3>Traffic Source</h3>
          <div>
            <Doughnut data = {data} />
          </div>
        </div>
    </div>
  )
}

export default TrafficChart