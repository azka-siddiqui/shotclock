import { useState, useEffect } from "react";
import Header from "../components/Header";

// Styles for various elements

const buttonStyle = {
  padding: "0.5em 1em",
  fontSize: "1em",
  fontWeight: "540",
  fontFamily: "inherit",
  backgroundColor: '#F5FFFA',
  color: "#000",
  cursor: "pointer",
  transition: "background-color 0.25s",
  borderRadius: "10px", // Adjust the value to control the roundness of the border
  margin: '10px',
  borderWidth: "1.9px", 
  marginBottom: '5px'
};

const countdownStyle = {
  fontSize: "36em",
  fontFamily: "Palatino, URW Palladio L, serif", // Apply the custom font
  marginTop: "-0.2em",
  marginBottom: "-0.18em",
  textAlign: 'center',
};

const countdownGreyStyle = {
  ...countdownStyle,
  color:  "#848884",
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
          {!clearClicked && time > 0 && ( // Conditionally render the button
            <button
              onClick={togglePaused}
              style={{
                ...buttonStyle,
                border: paused ? "1.5px solid forestgreen" : "1px solid red",
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
