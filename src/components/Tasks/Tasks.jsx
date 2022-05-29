import React from "react";
import styles from "./tasks.module.css";
import Task from "../Task/Task";
import emptyIcon from "../../assets/empty.svg";
const Tasks = ({ tasks, handleUpdateTask, handleRemoveTask }) => {
  // NOTE: do not delete `data-cy` key value pair
  return (
    <>
      {tasks.length > 0 ? (
        <ul data-cy="tasks" className={styles.tasks}>
          {tasks.map((task) => (
            <Task
              key={task.id}
              task={task}
              handleRemoveTask={handleRemoveTask}
              handleUpdateTask={handleUpdateTask}
            />
          ))}
        </ul>
      ) : (
        <div data-cy="tasks-empty" className={styles.empty}>
          <img className={styles.emptyIcon} src={emptyIcon} alt="Empty task list" />
          <div>
            <b>Empty list</b>
          </div>
          <div>
            <b>Add a new task above</b>
          </div>
        </div>
      )}
    </>
  );
};

export default Tasks;
