import React, { useEffect, useRef, useState } from "react";

const TodoItem = (props) => {
  const [toggle, setToggle] = useState(false);
  const inputRef = useRef();
  const handleDelete = () => {
    if (!toggle) props.handleDelete(props.list);
    else {
      setToggle(false);
    }
  };
  const handleToggle = () => {
    if (!toggle) {
      setToggle(true);
    } else {
      setToggle(false);
      props.handleUpdate(props.list, inputRef.current.value);
    }
  };
  const checkComplate = () => {
    props.handleComplete(props.list);
  };
  useEffect(() => {
    if (toggle) inputRef.current.focus();
  });
  return (
    <li className="list-item">
      <div className="item-text-container">
        {toggle ? (
          <input className="item-input" ref={inputRef} type="text"></input>
        ) : (
          <div className="item-text-container">
            <button
              onClick={checkComplate}
              className={
                "item-check " + (props.list.state ? "check" : "uncheck")
              }
            ></button>
            <span
              className={
                "item-text " + (props.list.state ? "check-text" : "uncheck")
              }
            >
              {props.list.name}
            </span>
          </div>
        )}
      </div>
      <div className="item-btn-container">
        <button onClick={handleToggle} className="item-btn">
          {toggle ? "확인" : "수정"}
        </button>
        <button onClick={handleDelete} className="item-btn">
          {toggle ? "취소" : "삭제"}
        </button>
      </div>
    </li>
  );
};

export default TodoItem;
