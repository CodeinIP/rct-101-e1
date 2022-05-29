import React, { useState } from "react";
import styles from "./counter.module.css";

const Counter = ({count,updateCount}) => {


  return (
    <div className={styles.counter}>
      <button className={styles.incbtn} data-cy="task-counter-increment-button" onClick={()=>updateCount(count+1)}>+</button>
      <span data-cy="task-counter-value">{count}</span>
      <button className={styles.decbtn} data-cy="task-counter-decrement-button" onClick={()=>updateCount(count-1)}>-</button>
    </div>
  );
};

export default Counter;
