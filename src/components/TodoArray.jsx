import React from "react";
import { BsTrash } from "react-icons/bs";

const TodoArray = ({ tasks, completeTask, deleteTask }) => {
  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => completeTask(task.id)}
          />
          <span
            style={{ textDecoration: task.completed ? "line-through" : "none" }}
          >
            {task.title}
          </span>
          <button onClick={() => deleteTask(task.id)}>
            <BsTrash />
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TodoArray;
