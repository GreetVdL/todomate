import { createContext, useState } from "react";
import { nanoid } from "nanoid";
import useLocalStorage from "../hooks/useLocalStorage";

const TodoContext = createContext(null);

const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useLocalStorage("todos", []);
  const [entered, setEntered] = useState("");

  const addTodo = () => {
    setTodos([...todos, { text: entered, id: nanoid(), active: true }]);
  };
  const removeTodo = (id) => {
    setTodos(todos.filter((el) => el.id !== id));
  };
  const toggleTodo = (id) => {
    setTodos(
      todos.filter((todo) => {
        if (todo.id === id) {
          todo.active = !todo.active;
        }
        return todo;
      })
    );
  };

  const data = {
    todos,
    entered,
    setEntered,
    addTodo,
    removeTodo,
    toggleTodo,
  };

  return <TodoContext.Provider value={data}>{children}</TodoContext.Provider>;
};

export { TodoContext, TodoProvider };
