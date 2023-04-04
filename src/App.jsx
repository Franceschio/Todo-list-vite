import { useReducer } from "react";
import { Context } from "./store";
import { initialState } from "./store/state";
import { mainReducer } from "./store/reducers";
import Hero from "./components/hero";
import TasksList from "./components/tasksList";
import NewTodoModal from "./components/newTodoModal/NewTodoModal";
import styles from "./App.module.scss";

function App() {
  const [state, dispatch] = useReducer(mainReducer, initialState);

  const activateModal = () => dispatch({ type: "SET_MODAL" });

  return (
    <div className={styles.App}>
      <Context.Provider value={{ state, dispatch }}>
        <Hero />
        <TasksList />
        <NewTodoModal />
        <button className={styles.addTodo} onClick={activateModal}>
          {"+"}
        </button>
      </Context.Provider>
    </div>
  );
}

export default App;
