import { createContext, useState } from "react";

const TodoContext = createContext(null);

const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);
  const [entered, setEntered] = useState("");
  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };
  const removeTodo = (todo) => {
    setTodos(todos.filter((el) => el !== todo));
  };
  const data = { todos, entered, setEntered, addTodo, removeTodo };

  return <TodoContext.Provider value={data}>{children}</TodoContext.Provider>;
};

export { TodoContext, TodoProvider };
