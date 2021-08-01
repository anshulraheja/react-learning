import { useState } from "react";

export default function TodoList() {
  const [item, setItem] = useState("");
  const [todo, setTodo] = useState([]);

  const handleInput = (e) => {
    setItem(e.target.value);
  };

  //add item to the todolist
  const addItem = () => {
    // todo.push(item);
    // setTodo(todo);

    //  alternative way
    setTodo((oldValue) => {
      return [...oldValue, item];
    });

    setItem("");
  };

  //delete item from todolist
  const deleteItem = (id) => {
    setTodo((oldItems) => {
      return oldItems.filter((arrElement, index) => {
        return index !== id;
      });
    });
    // setTodo(todo.filter((arrElement, index) => index !== id));
  };

  return (
    <div className="main-div">
      <div className="center-div">
        <h1 className="todo-heading">Todo List</h1>
        <div class="input-div">
          <input
            className="todo-input"
            type="text"
            placeholder="Add a item"
            onChange={handleInput}
            value={item}
          />
          <button onClick={addItem} className="add-button">
            +
          </button>
        </div>
        <ol className="todo-undordered">
          {todo.map((text, index) => (
            <Result list={text} delete={deleteItem} id={index} key={index} />
          ))}
        </ol>
      </div>
    </div>
  );
}

//todolist
const Result = (props) => {
  return (
    <div className="todo_style">
      <i
        className="todo-delete fas fa-times"
        onClick={() => props.delete(props.id)}
      ></i>
      <li>{props.list}</li>
    </div>
  );
};
