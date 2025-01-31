import { nanoid } from "nanoid";

const addTask = (text) => ({
  type: "tasks/addTask",
  payload: {
    id: nanoid(),
    text,
    completed: false,
  },
});

const setStatusFilter = (value) => {
  return {
    type: "filters/setStatusFilter",
    payload: value,
  };
};

const deleteTask = (idTaskToDelete) => ({
  type: "tasks/deleteTask",
  payload: idTaskToDelete,
});

const completeTask = ({ isTaskComplete, task }) => ({
  type: "tasks/completeTask",
  payload: {
    isComplete: isTaskComplete,
    activeTask: task,
  },
});

export { addTask, setStatusFilter, deleteTask, completeTask };
