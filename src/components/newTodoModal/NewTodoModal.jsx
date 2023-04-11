import { useContext, useReducer, useState } from "react";
import styles from "./index.module.scss";
import { Context } from "../../store";

const NewTodoModal = () => {
  const { state, dispatch } = useContext(Context);

  const closeModal = () => dispatch({ type: "SET_MODAL" });

  const createNewTask = (e) => {
    e.preventDefault();
    dispatch({
      type: "CREATE_NEW_TASK",
      payload: {
        id: state.nTasks + 1,
        todo: e.target[0].value,
        completed: false,
        userId: state.nTasks + 1,
      },
    });
    closeModal();
    e.target[0].value = "";
  };

  return (
    <div
      className={`${styles.NewTodoModal} ${
        state.isModalVisible && styles.NewTodoModalActive
      }`}
    >
      <div className={styles.overflow} onClick={closeModal}></div>
      <div className={styles.addTodo}>
        <p className={styles.quitModal} onClick={closeModal}>
          X
        </p>
        <h1>Add a new task!</h1>
        <form onSubmit={createNewTask}>
          <input className={styles.newTodoText} type="text" required />
          <input className={styles.newTodoBtn} type="submit" value="add" />
        </form>
      </div>
    </div>
  );
};

export default NewTodoModal;
