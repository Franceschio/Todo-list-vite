import { useState, useEffect } from "react";
import { GET } from "../../utils/http";
import { randomHSLA } from "../../utils/funcs";
import styles from "./index.module.scss";

const Task = ({ taskData }) => {
  const [userData, setUserData] = useState({});

  return (
    <div className={styles.Task} style={{ background: `${randomHSLA()}` }}>
      <div className={styles.content}>
        <p>{taskData.todo}</p>
      </div>
      <div className={styles.info}>
        {taskData.completed ? (
          <button className={styles.completed}>V</button>
        ) : (
          <button className={styles.uncompleted}>X</button>
        )}
      </div>
    </div>
  );
};

export default Task;
