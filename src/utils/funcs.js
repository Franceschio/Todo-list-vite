export const randomHSLA = () => {
  return `hsla(${~~(360 * Math.random())}, 70%,  72%, 0.8)`;
};

export const calcPercCompletedTasks = (tasksList) => {
  const tasksListLen = tasksList.length;
  const completedTasks = tasksList.reduce((acc, current) => {
    current.completed && acc++;
    return acc;
  }, 0);
  return Math.floor((completedTasks / tasksListLen) * 100);
};
