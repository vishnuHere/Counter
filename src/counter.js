import React, { useEffect, useRef, useState } from "react";
import "./styles.css";

const Counter: React.FC = () => {
  const [value, setValue] = useState(0);
  const [pause, setPause] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      if (!pause) setValue(value + 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [value, pause]);

  const handlePause = () => {
    setPause(!pause);
  };

  const handleReset = () => {
    setValue(0);
    setPause(true);
  };

  return (
    <div>
      <h1>{value}</h1>
      <div className={"button_container"}>
        <button className={"button"} onClick={handlePause}>
          {pause ? "Start" : "Pause"}
        </button>
        <button className={"button"} onClick={handleReset}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default Counter;
