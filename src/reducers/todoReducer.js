import {
  ADD_TODO,
  DELETE_TODO,
  GET_TODO,
  UPDATE_TODO,
} from "../constants/todoConstants";

const todoReducer = (state = "", action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };

    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };

    case GET_TODO:
      let singleTodo = state.todos.filter((todo) => todo.id === action.payload);
      return {
        ...state,
        todo: singleTodo.length > 0 ? singleTodo[0] : {},
      };

    case UPDATE_TODO:
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload.id ? action.payload : todo
        ),
      };

    default:
      return state;
  }
};

export default todoReducer;
