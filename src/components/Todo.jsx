import React from "react";
import "./Todo.scss";

const Todo = ({ children }) => {
  return (
    <li>
      <p>{children}</p>
      <button className="toggle">TOGGLE</button>
      <button className="remove">REMOVE</button>
    </li>
  );
};

export default Todo;
