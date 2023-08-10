const Todo = (props) => {

    return (

<div className="Clickme">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
    </div>

    );
};

export default ClickButton;