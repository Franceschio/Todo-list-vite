import { useEffect, useReducer, useState } from "react";
import { Context } from "./store";
import { initialState } from "./store/state";
import { mainReducer } from "./store/reducers";
import Hero from "./components/Hero";
import TasksList from "./components/tasksList";
import NewTodoModal from "./components/newTodoModal/NewTodoModal";
import styles from "./App.module.scss";
// import { todos } from "./Mock/mock";
import Navbar from "./components/Navbar/Navbar";

function App() {
  const [todos, setTodos] = useState(
    localStorage.getItem("todos")
      ? JSON.parse(localStorage.getItem("todos"))
      : null
  );

  const [state, dispatch] = useReducer(mainReducer, initialState);

  const activateModal = () => dispatch({ type: "SET_MODAL" });

  useEffect(() => {
    dispatch({ type: "SET_TASKS_LIST", payload: todos });
  }, []);

  return (
    <div className={styles.App}>
      <Context.Provider value={{ state, dispatch }}>
        <Hero />
        <Navbar />
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
