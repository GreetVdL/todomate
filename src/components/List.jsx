import React, { useContext } from "react";
import Todo from "./Todo";
import "./List.scss";
import { TodoContext } from "../data/TodoContext";

const List = () => {
  const data = useContext(TodoContext);
  return (
    <ul>
      {data.todos.length ? (
        data.todos.map((todo) => {
          return (
            <Todo key={todo.id} keyValue={todo.id} todo={todo.text}>
              {todo.text}
            </Todo>
          );
        })
      ) : (
        <p className="placeholder">
          Seems like you have nothing on your plate just yet...
        </p>
      )}
    </ul>
  );
};

export default List;
