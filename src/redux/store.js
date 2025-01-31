import { createStore } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
// import { nanoid } from "nanoid";
import rootReducer from "./reducer";

// const initialState = {
//   tasks: [
//     { id: nanoid(), text: "Learn HTML and CSS", completed: true },
//     { id: nanoid(), text: "Get good at JavaScript", completed: true },
//     { id: nanoid(), text: "Master React", completed: false },
//     { id: nanoid(), text: "Discover Redux", completed: false },
//     { id: nanoid(), text: "Build amazing apps", completed: false },
//   ],
//   filters: {
//     status: "all",
//   },
// };

// const reducer = ;

const store = createStore(rootReducer, composeWithDevTools());

export default store;
