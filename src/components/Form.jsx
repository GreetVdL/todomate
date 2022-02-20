import React, { useState, useRef, useEffect, useContext } from "react";
import "./Form.scss";
import { TodoContext } from "../data/TodoContext";

const Form = () => {
  const [valid, setValid] = useState(true);

  const inputRef = useRef();

  const data = useContext(TodoContext);

  useEffect(() => {
    inputRef.current.focus();
  });

  const handleInputChange = (e) => {
    setValid(true);
    data.setEntered(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (data.entered === "") {
      setValid(!valid);
      return;
    }
    data.addTodo();
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
      {valid ? "" : <p className="validation">Please enter a to do.</p>}
      <button>ADD TO DO</button>
    </form>
  );
};

export default Form;
