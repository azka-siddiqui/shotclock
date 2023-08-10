import Header from "../components/Header";
import { useState } from 'react'
import Todo from "../components/Todo";
import "./App.css";

const App = () => {
  const [count, setCount] = useState(0)
  
  const name = "John Doe";
  const birthYear = 2000;
  const thisYear = 2023;
  const element = (
    <div>
      Hello, {name}! You are {thisYear - birthYear}.
    </div>
  );

  const list1 = ["Do laundry", "Wash dishes", "Clean kitchen"]
  const list2 = ["Do homework", "Clean my room"]
  return (
    <div>
      {/*header*/}
      <Header name = "Azka Siddiqui"/>

    {/*main*/}
      <Todo title = "Monday" list = {list1}/>
      <Todo title = "Tuesday" list = {list2}/>

    {/* Button */}

<div className="Clickme">
    <button onClick={() => setCount((count) => count + 1)}>
      count is {count}
    </button>
</div>

    </div>
  );
};

export default App;