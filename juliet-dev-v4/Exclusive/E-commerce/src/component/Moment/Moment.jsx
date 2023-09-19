import React, { useState, useEffect } from 'react';
import moment from 'moment';
import styles from "./Moment.module.css"

function Moment() {
  const [countdown, setCountdown] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const futureDate = moment().add(1, 'months');
    const timerInterval = setInterval(() => {
      const currentDate = moment();
      const duration = moment.duration(futureDate.diff(currentDate));
      const days = duration.days();
      const hours = duration.hours();
      const minutes = duration.minutes();
      const seconds = duration.seconds();
      
      setCountdown({days, hours, minutes, seconds });
      
      if (days === 0 && hours === 0 && minutes === 0 && seconds === 0) {
        clearInterval(timerInterval);
      }
    }, 1000);

    // Cleanup the interval on component unmount
    return () => {
      clearInterval(timerInterval);
    };
  }, []);

  return (
    <>
    <div>
    <div className={styles.counter}>
      <p>days</p>
      <p>hours</p>
      <p>minutes</p>
      <p>seconds</p>
      </div>
      <div className={styles.timer}>
      <h1>
      {countdown.days} <span>:</span> {countdown.hours} <span>:</span> {countdown.minutes} <span>:</span> {countdown.seconds} 
      </h1>
      </div>
    </div>
     
  

    </>
  );
}

export default Moment;

