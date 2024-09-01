import React from "react";
import styles from "./Statistics.module.css";

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <div className={styles.statistics}>
    <p className={styles.statisticItem}>Good: {good}</p>
    <p className={styles.statisticItem}>Neutral: {neutral}</p>
    <p className={styles.statisticItem}>Bad: {bad}</p>
    <p className={styles.statisticItem}>Total: {total}</p>
    <p className={styles.statisticItem}>
      Positive feedback: {positivePercentage}%
    </p>
  </div>
);

export default Statistics;
