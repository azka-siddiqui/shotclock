const Todo = (props) => {
    console.log(props);

    return (
<div className="main">

<div className="todo">
  <h3 className="todo-header">{props.title}</h3>
  <ul className="todo-list">
    {props.list.map((item) => (
    <li>{item}</li>
    ))}
  </ul>
</div>

</div>

    );
};

export default Todo;