import { nanoid } from "nanoid";
import { combineReducers } from "redux";

const tasksInitialState = {
  tasks: [
    { id: nanoid(), text: "Learn HTML and CSS", completed: true },
    { id: nanoid(), text: "Get good at JavaScript", completed: true },
    { id: nanoid(), text: "Master React", completed: false },
    { id: nanoid(), text: "Discover Redux", completed: false },
    { id: nanoid(), text: "Build amazing apps", completed: false },
  ],
};

const taskReducer = (state = tasksInitialState, action) => {
  switch (action.type) {
    case "tasks/addTask":
      return { ...state, tasks: state.tasks.concat(action.payload) };

    case "tasks/deleteTask":
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload),
      };

    case "tasks/completeTask":
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          action.payload.activeTask.id === task.id
            ? { ...task, completed: action.payload.isComplete }
            : task
        ),
      };

    default:
      return state;
  }
};

const filtersInitialState = {
  status: "all",
};

const filtersReducer = (state = filtersInitialState, action) => {
  console.log(state);

  switch (action.type) {
    case "filters/setStatusFilter":
      return { ...state, status: action.payload };

    default:
      return state;
  }
};

// const rootReducer = (state = {}, action) => {
//   return {
//     tasks: taskReducer(state.tasks, action),
//     filters: filtersReducer(state.filters, action),
//   };
// };

const rootReducer = combineReducers({
  tasks: taskReducer,
  filters: filtersReducer,
});

export default rootReducer;
