import React, { useState, useContext } from "react";
import "./Todo.scss";
import { TodoContext } from "../data/TodoContext";

const Todo = ({ children, todo }) => {
  // State for the toggle button
  const [active, setActive] = useState(true);

  const data = useContext(TodoContext);

  const handleToggleClick = () => {
    setActive(!active);
  };

  const handleRemoveClick = () => {
    data.removeTodo(todo);
  };

  return (
    <li>
      <p className={active ? "" : "strike"}>{children}</p>
      <div className="buttons">
        <button className="toggle" onClick={handleToggleClick}>
          {active ? "DONE" : "TO DO"}
        </button>
        <button className="remove" onClick={handleRemoveClick}>
          REMOVE
        </button>
      </div>
    </li>
  );
};

export default Todo;
