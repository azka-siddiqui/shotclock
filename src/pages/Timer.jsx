import { useState, useEffect } from "react";
import Header from "../components/Header";

// Styles for various elements
const buttonStyle = {
  padding: "2% 4%",
  fontSize: "2vw",
  fontWeight: "bold",
  fontFamily: "inherit",
  backgroundColor: "white",
  color: "#000",
  cursor: "pointer",
  transition: "background-color 0.25s",
  borderRadius: "4px",
  margin: "2%",
};

const countdownStyle = {
  fontSize: "6vw",
  fontFamily: "Palatino, URW Palladio L, serif", // Apply the custom font
  marginTop: "-2vh",
  marginBottom: "-1vh",
};

const countdownGreyStyle = {
  ...countdownStyle,
  color: "grey",
};

const containerStyle = {
  marginTop: "-4vh",
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
};

const resetButtonStyle = {
  ...buttonStyle,
  border: "2px solid #444",
};

const clearButtonStyle = {
  ...resetButtonStyle,
};

const Timer = () => {
  // State variables for time, paused state, and clear button click
  const [time, setTime] = useState(24);
  const [paused, setPaused] = useState(true);
  const [clearClicked, setClearClicked] = useState(false);

  // Function to toggle the paused state
  const togglePaused = () => {
    setPaused(!paused);
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
        setTime(time - 1);
      }, 1000);
    }

    return () => clearInterval(id);
  }, [paused, time]);

  return (
    <div>
      <Header name="" />

      <div className="main">
        <p style={clearClicked ? countdownGreyStyle : countdownStyle}>
          {time < 10 ? `0${time}` : time}
        </p>
        <div className="button-container" style={containerStyle}>
          <button
            onClick={togglePaused}
            style={{
              ...buttonStyle,
              border: paused ? "2px solid green" : "2px solid red",
            }}
          >
            {paused && !clearClicked ? "Start" : "Stop"}
          </button>
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
