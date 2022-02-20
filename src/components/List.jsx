import React, { useContext } from "react";
import Todo from "./Todo";
import "./List.scss";
import { TodoContext } from "../data/TodoContext";
import { nanoid } from "nanoid";

const List = () => {
  const data = useContext(TodoContext);
  return (
    <ul>
      {data.todos.length ? (
        data.todos.map((todo) => {
          return (
            <Todo key={nanoid()} todo={todo}>
              {todo}
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
