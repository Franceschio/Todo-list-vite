import { useState, useEffect, useContext } from "react";
import { GET } from "../../utils/http";
import { randomHSLA } from "../../utils/funcs";
import styles from "./index.module.scss";
import { Context } from "../../store";

const Task = ({ taskData }) => {
  const { state, dispatch } = useContext(Context);

  const setCompleted = () =>
    dispatch({
      type: "SET_TASK_COMPLETED",
      payload: {
        id: taskData.id,
        todo: taskData.todo,
        completed: taskData.completed,
        userId: taskData.userId,
      },
    });
  return (
    <div className={styles.Task} style={{ background: `${randomHSLA()}` }}>
      <div className={styles.content}>
        <p>{taskData.todo}</p>
      </div>
      <div className={styles.info}>
        {taskData.completed ? (
          <button className={styles.completed} onClick={setCompleted}>
            V
          </button>
        ) : (
          <button className={styles.uncompleted} onClick={setCompleted}>
            X
          </button>
        )}
      </div>
    </div>
  );
};

export default Task;
