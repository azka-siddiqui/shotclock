import { useState, useEffect } from "react";
import Header from "../components/Header";

const Countdown = () => {
    const [time, setTime] = useState(10);

    useEffect(() => {
        
        let id;
        if (time > 0) {
        id = setInterval(() => setTime((time) => time - 1), 1000);
        }
        return () => clearInterval(id);
    }, [time]);

    return (

        <div>
            <Header name = "John Doe" />

            <div className = "main">
                <p>Time: {time}</p>
                {/* button */}
            </div>

        </div>

    );
};

export default Countdown;