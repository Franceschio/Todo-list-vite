import { useState, useEffect, useContext } from "react";
import { Context } from "../../store";
import { GET } from "../../utils/http";
import Task from "../task/Task";
import styles from "./index.module.scss";
import { todos } from "../../Mock/mock";

const TasksList = () => {
  const { state, dispatch } = useContext(Context);

  return (
    <div className={styles.TasksList}>
      {state.tasksListData.map((task) => (
        <Task taskData={task} key={task.id} />
      ))}
    </div>
  );
};

export default TasksList;
