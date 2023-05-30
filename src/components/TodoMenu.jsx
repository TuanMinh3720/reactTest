import React from "react";

const TodoMenu = ({ menuTasks }) => {
  const handleFilterChange = (e) => {
    menuTasks(e.target.value);
  };

  return (
    <div>
      <label style={{ marginRight: "30px" }}>
        <input
          type="radio"
          name="filter"
          value="all"
          onChange={handleFilterChange}
        />
        All
      </label>
      <label style={{ marginRight: "30px" }}>
        <input
          type="radio"
          name="filter"
          value="active"
          onChange={handleFilterChange}
        />
        Active
      </label>
      <label style={{ marginRight: "30px" }}>
        <input
          type="radio"
          name="filter"
          value="completed"
          onChange={handleFilterChange}
        />
        Completed
      </label>
    </div>
  );
};

export default TodoMenu;
