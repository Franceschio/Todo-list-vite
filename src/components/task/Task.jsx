import { useState, useEffect, useContext } from "react";
import { GET } from "../../utils/http";
import { randomHSLA } from "../../utils/funcs";
import styles from "./index.module.scss";
import { Context } from "../../store";

const Task = ({ taskData }) => {
  const [selectActive, setSelectActive] = useState(false);

  const activeSelect = () => setSelectActive((prev) => !prev);

  const { state, dispatch } = useContext(Context);

  const setCompleted = () => {
    dispatch({
      type: "SET_TASK_COMPLETED",
      payload: {
        id: taskData.id,
        todo: taskData.todo,
        completed: taskData.completed,
        userId: taskData.userId,
      },
    });
  };

  return (
    <div className={styles.Task} style={{ background: `${randomHSLA()}` }}>
      <div className={styles.content}>
        <p>{taskData.todo}</p>
      </div>
      <div className={styles.info}>
        <div
          className={`${styles.selectOption} ${
            selectActive && styles.activeSelectOption
          }`}
        >
          <div
            className={styles.uncompleteOption}
            onClick={() => {
              setCompleted();
              activeSelect();
            }}
          >
            uncompleted
          </div>
          <div className={styles.deleteOption}>delete</div>
        </div>
        {taskData.completed ? (
          <button className={styles.completed} onClick={activeSelect}>
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
