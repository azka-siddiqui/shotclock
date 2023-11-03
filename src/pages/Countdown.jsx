import { useState, useEffect } from "react";
import Header from "../components/Header";

const buttonStyle = {
  padding: "0.6em 1.2em",
  fontSize: "1em",
  fontWeight: "500",
  fontFamily: "inherit",
  backgroundColor: "white",
  color: "#000",
  cursor: "pointer",
  transition: "background-color 0.25s",
  borderRadius: "4",
  margin: "1.0em",
  marginBottom: "-.08em",
};

const countdownStyle = {
  fontSize: "35em",
  fontFamily: "Palatino, URW Palladio L, serif",
  textAlign: "center", // Center horizontally

};

const countdownGreyStyle = {
  ...countdownStyle,
  color: "grey",
};

const containerStyle = {
  marginTop: "-2em",
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
};

const resetButtonStyle = {
  ...buttonStyle,
  border: "1px solid #444",
};

const clearButtonStyle = {
  ...resetButtonStyle,
};

const Timer = () => {
  const [time, setTime] = useState(24);
  const [paused, setPaused] = useState(true);
  const [clearClicked, setClearClicked] = useState(false);

  const togglePaused = () => {
    setPaused((paused) => !paused);
  };

  const resetTime = (newTime) => {
    setTime(newTime);
    setPaused(false);
    setClearClicked(false);
  };

  const clearTime = () => {
    setTime(0);
    setClearClicked(true);
    if (!paused) {
      togglePaused();
    }
  };

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

  return (
    <div>
      <Header name="" />

      <div className="main">
        <p style={clearClicked ? countdownGreyStyle : countdownStyle}>
          {time < 10 ? `0${time}` : time}
        </p>
        <div className="button-container" style={containerStyle}>
          {!clearClicked && (
            <button
              onClick={togglePaused}
              style={{
                ...buttonStyle,
                border: paused ? "1px solid green" : "1px solid red",
              }}
            >
              {paused ? "Start" : "Stop"}
            </button>
          )}
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

