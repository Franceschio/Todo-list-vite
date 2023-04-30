import styles from "./index.module.scss";
import { calcPercCompletedTasks } from "../../utils/funcs";
import { useContext } from "react";
import { Context } from "../../store";

const Navbar = () => {
  const { state } = useContext(Context);
  return (
    <div className={styles.Navbar}>
      <div>
        <p>Today's {new Date().toLocaleString("en-GB", { weekday: "long" })}</p>
        <span>{new Date().toLocaleDateString()}</span>
      </div>
      <div>
        <p>
          {state.tasksListData.length > 0
            ? calcPercCompletedTasks(state.tasksListData)
            : "100"}
          % Done
        </p>
        <span>Completed Tasks</span>
      </div>
    </div>
  );
};

export default Navbar;
