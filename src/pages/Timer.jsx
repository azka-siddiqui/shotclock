import { useState, useEffect } from "react";
import Header from "../components/Header";

const Timer = () => {
  const [time, setTime] = useState(0);
  const [paused, setPaused] = useState(true);

  const togglePaused = () => {
    setPaused((paused) => !paused);
  };

  useEffect(() => {
    let id;
    if (!paused) {
      id = setInterval(() => setTime((time) => time + 1), 1000);
    }

    return () => clearInterval(id);
  }, [paused]);

  return (
    <div>
      <Header name="John Doe" />

      <div className="main">
        <p>Time: {time}</p>
        <button onClick={togglePaused}>{paused ? "ON" : "OFF"}</button>
      </div>
    </div>
  );
};

export default Timer;