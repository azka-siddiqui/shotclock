import { useState } from "react";
import Header from "../components/Header";

const Count = () => {
    //let count = 0;
    const [count, setCount] = useState(0);

    const handleClick = () => {
        setCount((count) => count + 1);
    };

    return (

    <div>
        <Header name = "John Doe"/>
        <div className = "main">
            <button onClick = {handleClick}> Count is {count}</button>
        </div>
    </div>

  );
};

export default Count;