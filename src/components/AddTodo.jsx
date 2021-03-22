import React, { useState } from "react";

const AddTodo = ({ addTodo }) => {
  const [content, setContent] = useState({});
  const handleSubmit = (e) => {
    e.preventDefault();
    let id = Math.random();
    addTodo({ id, content });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Add new Todo</label>
        <input type="text" onChange={(e) => setContent(e.target.value)} />
      </form>
    </div>
  );
};

export default AddTodo;
