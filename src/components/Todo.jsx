import React, { useState } from "react";
import "./Todo.scss";

const Todo = ({ children }) => {
  // State for the toggle button
  const [active, setActive] = useState(true);

  const handleToggleClick = () => {
    setActive(!active);
  };
  return (
    <li>
      <p className={active ? "" : "strike"}>{children}</p>
      <button className="toggle" onClick={handleToggleClick}>
        {active ? "DONE" : "TO DO"}
      </button>
      <button className="remove">REMOVE</button>
    </li>
  );
};

export default Todo;
