import React, { useEffect, useRef, useState } from "react";

const CheckList = (props) => {
  const [All, setAll] = useState(false);
  const [Active, setActive] = useState(false);
  const [Complete, setComplete] = useState(false);
  const handleState = (e) => {
    if (e.target.innerText === "All") {
      props.handleState(-1);
      setAll(true);
      setActive(false);
      setComplete(false);
    } else if (e.target.innerText === "Active") {
      props.handleState(0);
      setAll(false);
      setActive(true);
      setComplete(false);
    } else {
      props.handleState(1);
      setAll(false);
      setActive(false);
      setComplete(true);
    }
  };
  useEffect(() => {
    setAll(true);
    setActive(false);
    setComplete(false);
  }, []);
  return (
    <div className="check-container">
      <button
        onClick={handleState}
        className={"check-btn " + (All ? "checked" : "")}
      >
        All
      </button>
      <button
        onClick={handleState}
        className={"check-btn " + (Active ? "checked" : "")}
      >
        Active
      </button>
      <button
        onClick={handleState}
        className={"check-btn " + (Complete ? "checked" : "")}
      >
        Completed
      </button>
    </div>
  );
};

export default CheckList;
