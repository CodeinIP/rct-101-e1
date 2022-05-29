import React, { useState } from "react";
import styles from "./addTask.module.css";

const AddTask = ({addTask}) => {
  const[newTask,setNewTask]= useState("")
  const handleClick = ()=>{
    addTask(newTask);
    setNewTask("");
  }

  return (
    <div className={styles.todoForm}>
      <input className={styles.addTaskInput} value={newTask} onChange={(e)=> setNewTask(e.target.value)} data-cy="add-task-input" type="text" />
      <button className={styles.addbtn} data-cy="add-task-button" onClick={handleClick} >+</button>
    </div>
  );
};

export default AddTask;
