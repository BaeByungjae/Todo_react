import React, { useEffect, useRef } from "react";

const HeaderTodo = (props) => {
  const submitRef = useRef();
  const inputRef = useRef();
  useEffect(() => {
    inputRef.current.focus();
  });
  const handleSubmit = (event) => {
    event.preventDefault();
    const name = inputRef.current.value;
    inputRef.current.focus();
    inputRef.current.value = "";
    name && props.createList(name);
  };
  return (
    <>
      <header className="header-container">
        <h1 className="title">ToDoList</h1>
        <form className="input" ref={submitRef} onSubmit={handleSubmit}>
          <input
            className="input-text"
            ref={inputRef}
            type="text"
            placeholder="What needs to be done"
          ></input>
          <button className="input-btn" type="submit">
            +
          </button>
        </form>
      </header>
    </>
  );
};

export default HeaderTodo;
