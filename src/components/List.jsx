import React from "react";
import Todo from "./Todo";
import "./List.scss";

const List = () => {
  const data = ["gras afrijden", "React studeren", "opruimen"];
  return (
    <ul>
      {data.map((todo) => {
        return <Todo>{todo}</Todo>;
      })}
    </ul>
  );
};

export default List;
