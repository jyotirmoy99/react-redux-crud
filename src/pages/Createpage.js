import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addTodo } from "../actions/todoAction";

const Createpage = () => {
  const [data, setData] = useState({
    id: Math.floor(Math.random() * 100000).toString(),
    title: "",
    description: "",
    date: new Date(),
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // add todo
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTodo(data));
    navigate("/list");
  };
  return (
    <div className="form-wrap">
      <form onSubmit={handleSubmit}>
        <h1>Add Todo</h1>
        <input
          onChange={(e) => setData({ ...data, title: e.target.value })}
          type="text"
          placeholder="Enter title"
        />
        <textarea
          onChange={(e) => setData({ ...data, description: e.target.value })}
          type="text"
          placeholder="Enter description"
        />
        <button className="addUpdateButton">ADD</button>
      </form>
    </div>
  );
};

export default Createpage;
