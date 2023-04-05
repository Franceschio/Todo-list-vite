export const mainReducer = (state, action) => {
  switch (action.type) {
    case "SET_MODAL":
      return {
        ...state,
        isModalVisible: !state.isModalVisible,
      };

    case "SET_TASKS_LIST":
      return {
        ...state,
        tasksListData: action.payload,
      };

    case "CREATE_NEW_TASK":
      return {
        ...state,
        nTasks: state.nTasks + 1,
        tasksListData: [...state.tasksListData, action.payload],
      };

    case "SET_TASK_COMPLETED":
      return {
        ...state,
        tasksListData: state.tasksListData.map((task) => {
          if (task.id === action.payload.id)
            return {
              ...task,
              completed: !task.completed,
            };
          return task;
        }),
      };

    case "DELETE_TASK":
      return {
        ...state,
        tasksListData: state.tasksListData.filter(
          (task) => task.id !== action.payload
        ),
      };
  }
};
