import styles from "./Title.module.css";
const Title = ({ title, fontSize, color }) => {
  return (
    <h2 style={{ fontSize: fontSize, color: color }} className={styles.title}>
      {title}
    </h2>
  );
};

export default Title;