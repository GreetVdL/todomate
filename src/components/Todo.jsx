import React, { useState, useContext } from "react";
import "./Todo.scss";
import { TodoContext } from "../data/TodoContext";

const Todo = ({ children, todo, keyValue }) => {
  const data = useContext(TodoContext);

  const handleRemoveClick = () => {
    data.removeTodo(keyValue);
  };

  const handleToggleClick = () => {
    data.toggleTodo(keyValue);
  };

  return (
    <li>
      <p
        className={
          data.todos.filter((todo) => todo.id === keyValue)[0].active
            ? ""
            : "strike"
        }
      >
        {children}
      </p>
      <div className="buttons">
        <button className="toggle" onClick={handleToggleClick}>
          {data.todos.filter((todo) => todo.id === keyValue)[0].active
            ? "DONE"
            : "TO DO"}
        </button>
        <button className="remove" onClick={handleRemoveClick}>
          REMOVE
        </button>
      </div>
    </li>
  );
};

export default Todo;
