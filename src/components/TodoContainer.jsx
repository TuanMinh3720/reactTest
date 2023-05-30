import React, { useState, useEffect } from "react";
import { BsTrash } from "react-icons/bs";
import TodoInput from "./TodoInput";
import TodoArray from "./TodoArray";
import TodoMenu from "./TodoMenu";
import "./App.css";

const TodoContainer = () => {
  const [filter, setFilter] = useState("all");
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const storedTasks = localStorage.getItem("tasks");
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (title) => {
    const newTask = {
      id: Date.now(),
      title,
      completed: false,
    };
    setTasks([...tasks, newTask]);
  };

  const completeTask = (taskId) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  const deleteTask = (taskId) => {
    const menuTask = tasks.filter((task) => task.id !== taskId);
    setTasks(menuTask);
  };

  const deleteAllTasks = () => {
    setTasks([]);
  };

  const menuTasks = (filter) => {
    setFilter(filter);
  };

  const menuTask = tasks.filter((task) => {
    if (filter === "all") {
      return true;
    } else if (filter === "active") {
      return !task.completed;
    } else {
      return task.completed;
    }
  });

  return (
    <div className="container">
      <h1>#todo</h1>
      <TodoMenu menuTasks={menuTasks} />
      <TodoInput addTask={addTask} />
      <TodoArray
        tasks={menuTask}
        completeTask={completeTask}
        deleteTask={deleteTask}
      />
      <button className="delete-all-button" onClick={deleteAllTasks}>
        <BsTrash />
        <span>Delete All</span>
      </button>
    </div>
  );
};

export default TodoContainer;
