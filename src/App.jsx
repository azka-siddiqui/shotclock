import Header from "./Header";
import Todo from "./Todo";
import "./App.css";

const App = () => {
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

    </div>
  );
};

export default App;