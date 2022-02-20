import React, { useContext } from "react";
import Todo from "./Todo";
import "./List.scss";
import { TodoContext } from "../data/TodoContext";
import { nanoid } from "nanoid";

const List = () => {
  const data = useContext(TodoContext);
  return (
    <ul>
      {data.todos.map((todo) => {
        return (
          <Todo key={nanoid()} todo={todo}>
            {todo}
          </Todo>
        );
      })}
    </ul>
  );
};

export default List;
