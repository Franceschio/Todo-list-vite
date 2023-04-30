import { useState, useEffect, useContext } from "react";
import { Context } from "../../store";
import Task from "../task/Task";
import styles from "./index.module.scss";

const TasksList = () => {
  const { state, dispatch } = useContext(Context);

  return (
    <div className={styles.TasksList}>
      {state.tasksListData.length > 0 ? (
        state.tasksListData.map((task) => (
          <Task taskData={task} key={task.id} />
        ))
      ) : (
        <h2>You don't have any task.</h2>
      )}
    </div>
  );
};

export default TasksList;
