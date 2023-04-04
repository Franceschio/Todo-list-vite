import { useContext } from "react";
import { Context } from "../../store";
import { calcPercCompletedTasks } from "../../utils/funcs";
import styles from "./index.module.scss";

const Hero = () => {
  const { state } = useContext(Context);

  return (
    <div className={styles.Hero}>
      {new Date().getHours() >= 17 ? (
        <h1>Good evening!</h1>
      ) : (
        <h1>Good morning!</h1>
      )}
      <div className={styles.texts}>
        <div>
          <p>
            Today's {new Date().toLocaleString("en-GB", { weekday: "long" })}
          </p>
          <span>{new Date().toLocaleDateString()}</span>
        </div>
        <div>
          <p>{calcPercCompletedTasks(state.tasksListData)}% Done</p>
          <span>Completed Tasks</span>
        </div>
      </div>
    </div>
  );
};

export default Hero;
