import { useState, useEffect } from "react";
import "./Clock.css";

const Clock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timerID = setInterval(() => setTime(new Date()), 1000);

    return () => clearInterval(timerID);
  }, []);

  return (
    <div className="clock">
      <p>{time.toLocaleTimeString()}</p>
    </div>
  );
};

export default Clock;