import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import todoReducer from "./reducers/todoReducer";

const mainReducer = combineReducers({
  todo: todoReducer,
});

const initialState = {
  todo: {
    todos: [
      {
        id: "43254",
        title: "1st todo",
        description: "todo 1 desc",
        date: "Sat Apr 09 2022 18:09:03 GMT+0530 (India Standard Time)",
      },
      {
        id: "54532",
        title: "2nd todo",
        description: "2nd todo desc",
        date: "Sat Apr 09 2022 19:09:03 GMT+0530 (India Standard Time)",
      },
    ],
  },
};

const store = createStore(mainReducer, initialState, composeWithDevTools());

export default store;
