import React, { useState, useEffect } from "react";
import moment from "moment";
import styles from "./MomentStyled.module.css";

function Moment() {
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const futureDate = moment().add(1, "weeks");
    const timerInterval = setInterval(() => {
      const currentDate = moment();
      const duration = moment.duration(futureDate.diff(currentDate));
      const days = duration.days();
      const hours = duration.hours();
      const minutes = duration.minutes();
      const seconds = duration.seconds();

      setCountdown({ days, hours, minutes, seconds });

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
        <div className={styles.timer}>
          <div className={styles.time}>
            <p>days</p>
            <h1> {countdown.days} </h1>
          </div>

          <div className={styles.time}>
            <p>hours</p>
            <h1> {countdown.hours}</h1>
          </div>

          <div className={styles.time}>
            <p>minutes</p>
            <h1>{countdown.minutes} </h1>
          </div>

          <div className={styles.time}>
            <p>seconds</p>
            <h1>{countdown.seconds} </h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default Moment;
