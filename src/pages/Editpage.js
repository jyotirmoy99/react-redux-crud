import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getTodo, updateTodo } from "../actions/todoAction";

const Editpage = () => {
  const [data, setData] = useState({
    title: "",
    description: "",
  });

  const { todo } = useSelector((state) => state.todo);

  const dispatch = useDispatch();
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getTodo(params.id));
  }, [dispatch, params.id]);

  useEffect(() => {
    if (todo) {
      setData({
        ...data,
        id: todo.id,
        title: todo.title,
        description: todo.description,
        date: todo.date,
      });
    }
  }, [todo]);

  // add todo
  function handleUpdate(e) {
    e.preventDefault();
    dispatch(updateTodo(data));
    navigate("/list");
  }
  return (
    <div className="form-wrap">
      <form onSubmit={handleUpdate}>
        <h1>Edit Todo</h1>
        <input
          onChange={(e) => setData({ ...data, title: e.target.value })}
          value={data.title}
          type="text"
          placeholder="Enter title"
        />
        <textarea
          onChange={(e) => setData({ ...data, description: e.target.value })}
          value={data.description}
          type="text"
          placeholder="Enter description"
        />
        <button className="addUpdateButton">UPDATE</button>
      </form>
    </div>
  );
};

export default Editpage;
