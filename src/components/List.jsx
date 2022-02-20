import React, { useContext } from "react";
import Todo from "./Todo";
import "./List.scss";
import { TodoContext } from "../data/TodoContext";

const List = () => {
  const data = useContext(TodoContext);
  return (
    <ul>
      {data.todos.map((todo, i) => {
        return <Todo index={i}>{todo}</Todo>;
      })}
    </ul>
  );
};

export default List;
