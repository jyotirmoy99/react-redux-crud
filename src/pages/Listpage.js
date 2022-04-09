import React from "react";
import { Link } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { deleteTodo } from "../actions/todoAction";
import moment from "moment";

const Listpage = () => {
  const todos = useSelector((state) => state.todo.todos);

  const dispatch = useDispatch();

  // delete todo
  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
  };
  return (
    <div>
      <h1 style={{ marginTop: "50px" }}>All todos - {todos.length}</h1>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Description</th>
            <th>Date & Time</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo) => (
            <tr key={todo.id}>
              <td>{todo.id}</td>
              <td>{todo.title}</td>
              <td>{todo.description.substring(0, 20)}</td>
              <td>{moment(todo.date).format("LLL")}</td>
              <td>
                <Link to={`/edit/${todo.id}`}>
                  <button className="edit">
                    <i className="fa fa-pencil" aria-hidden="true"></i>
                  </button>
                </Link>
                <button
                  className="delete"
                  onClick={() => handleDelete(todo.id)}
                >
                  <i className="fa fa-trash" aria-hidden="true"></i>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Listpage;
