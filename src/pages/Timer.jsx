import { useState, useEffect } from "react";
import Header from "../components/Header";

// Styles for various elements
// (Your style definitions here...)

const Timer = () => {
  // State variables for time, paused state, and clear button click
  const [time, setTime] = useState(24);
  const [paused, setPaused] = useState(true);
  const [clearClicked, setClearClicked] = useState(false);

  // Function to toggle the paused state
  const togglePaused = () => {
    setPaused((paused) => !paused);
  };

  // Function to reset the time
  const resetTime = (newTime) => {
    setTime(newTime);
    setPaused(false);
    setClearClicked(false);
  };

  // Function to clear the time
  const clearTime = () => {
    setTime(0);
    setClearClicked(true);
    // Automatically reset the "Start" button
    if (!paused) {
      togglePaused();
    }
  };

  // Effect to decrement time when not paused
  useEffect(() => {
    let id;
    if (!paused && time > 0) {
      id = setInterval(() => {
        if (time === 1) {
          setPaused(true);
        }
        setTime((time) => time - 1);
      }, 1000);
    }

    return () => clearInterval(id);
  }, [paused, time]);

  // Conditionally render the "Start" button
  let startButton = null;
  if (!clearClicked) {
    startButton = (
      <button
        onClick={togglePaused}
        style={{
          ...buttonStyle,
          border: paused ? "1px solid green" : "1px solid red",
        }}
      >
        {paused ? "Start" : "Stop"}
      </button>
    );
  }

  return (
    <div>
      <Header name="" />

      <div className="main">
        <p style={clearClicked ? countdownGreyStyle : countdownStyle}>
          {time < 10 ? `0${time}` : time}
        </p>
        <div className="button-container" style={containerStyle}>
          {startButton} {/* Conditionally render the "Start" button */}
          <button onClick={() => resetTime(24)} style={resetButtonStyle}>
            Reset 24s
          </button>
          <button onClick={() => resetTime(14)} style={resetButtonStyle}>
            Reset 14s
          </button>
          <button onClick={clearTime} style={clearButtonStyle}>
            Clear
          </button>
        </div>
      </div>
    </div>
  );
};

export default Timer;
