import React, { useState, useEffect} from "react";
import styles from "./CountDownTimer.module.css";
import moment from 'moment';

const CountDownTimer = () => {
  const targetDate = moment().add(14, 'days'); 
  const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining());

  function calculateTimeRemaining() {
    const now = moment();
    const diff = moment.duration(targetDate.diff(now));
    return {
      days: diff.days(),
      hours: diff.hours(),
      minutes: diff.minutes(),
      seconds: diff.seconds(),
    };
  }

  useEffect(() => {
    const timerInterval = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining());
    }, 1000);

    return () => {
      clearInterval(timerInterval);
    };
  }, []); 

  return (
    <div className={styles.countdown_values}>
      <div className={styles.countdown_value}>
        <span>Days</span>
        <div className={styles.numbers}>
          <p className={styles.big_text}>{timeRemaining.days}</p>
          <h3>:</h3>
        </div>
      </div>
      <div className={styles.countdown_value}>
        <span>Hours</span>
        <div className={styles.numbers}>
          <p className={styles.big_text}>{timeRemaining.hours}</p>
          <h3>:</h3>
        </div>
      </div>
      <div className={styles.countdown_value}>
        <span>Minutes</span>
        <div className={styles.numbers}>
          <p className={styles.big_text}>{timeRemaining.minutes}</p>
          <h3>:</h3>
        </div>
      </div>
      <div className={styles.countdown_value}>
        <span>Seconds</span>
        <p className={styles.big_text}>{timeRemaining.seconds}</p>
      </div>
    </div>
  );
};

export default CountDownTimer;
