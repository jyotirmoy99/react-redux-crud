import {
  ADD_TODO,
  DELETE_TODO,
  GET_TODO,
  UPDATE_TODO,
} from "../constants/todoConstants";

export const addTodo = (data) => {
  return {
    type: ADD_TODO,
    payload: data,
  };
};

export const getTodo = (id) => {
  return {
    type: GET_TODO,
    payload: id,
  };
};

export const deleteTodo = (id) => {
  return {
    type: DELETE_TODO,
    payload: id,
  };
};

export const updateTodo = (data) => {
  return {
    type: UPDATE_TODO,
    payload: data,
  };
};
