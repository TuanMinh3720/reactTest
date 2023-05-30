import React, { useState } from "react";

const TodoInput = ({ addTask }) => {
  const [taskInput, setTaskInput] = useState("");

  const handleSubmit = (e) => {
    addTask(taskInput);
    e.preventDefault();
    setTaskInput("");
  };

  return (
    <form style={{ marginTop: "20px" }} onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="add details"
        onChange={(e) => setTaskInput(e.target.value)}
        value={taskInput}
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default TodoInput;
