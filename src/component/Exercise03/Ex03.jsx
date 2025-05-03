import React, { useRef, useState } from "react";

export default function Ex03() {
  const [time, setTime] = useState(0);
  const timeId = useRef();
  const handleStart = () => {
    timeId.current = setInterval(() => {
      setTime((prev) => prev + 1);
    }, 1000);
  };
  const handlePause = () => {
    clearInterval(timeId.current);
  };
  const handleReset = () => {
    clearInterval(timeId.current);
    setTime(0);
  };

  return (
    <div>
      <p>{time}s</p>
      <button style={{ border: "1px solid black" }} onClick={handleStart}>
        Start
      </button>
      <button style={{ border: "1px solid black" }} onClick={handlePause}>
        Pause
      </button>
      <button style={{ border: "1px solid black" }} onClick={handleReset}>
        Reset
      </button>
    </div>
  );
}
