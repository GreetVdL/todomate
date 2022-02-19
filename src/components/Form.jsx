import React, { useRef, useEffect } from "react";
import "./Form.scss";

const Form = () => {
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  });
  return (
    <form>
      <label htmlFor="text">Enter what you want to do!</label>
      <input ref={inputRef} id="text" type="text" />
      <button>ADD TO DO</button>
    </form>
  );
};

export default Form;
