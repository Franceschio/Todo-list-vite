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
        <p>{calcPercCompletedTasks(state.tasksListData)}% Done</p>
        <span>Completed Tasks</span>
      </div>
    </div>
  );
};

export default Navbar;
