import React, { useRef, useEffect, useContext } from "react";
import "./Form.scss";
import { TodoContext } from "../data/TodoContext";

const Form = () => {
  const inputRef = useRef();

  const data = useContext(TodoContext);

  useEffect(() => {
    inputRef.current.focus();
  });

  const handleInputChange = (e) => {
    data.setEntered(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    data.addTodo(data.entered);
    data.setEntered("");
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <label htmlFor="text">write down what you want to do!</label>
      <input
        ref={inputRef}
        id="text"
        type="text"
        value={data.entered}
        onChange={handleInputChange}
      />
      <button>ADD TO DO</button>
    </form>
  );
};

export default Form;
