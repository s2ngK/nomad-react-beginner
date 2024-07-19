import { useState } from "react";

function App() {
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState([]);
  const onChange = (e) => setTodo(e.target.value);
  const onSubmit = (e) => {
    e.preventDefault();
    if (todo === "") {
      return;
    }
    setTodo("");
    setTodoList((prev) => [todo, ...prev]);
  };
  return (
    <form onSubmit={onSubmit}>
      <h1>We have todos({todoList.length})</h1>
      <div>
        <input
          onChange={onChange}
          value={todo}
          type="text"
          placeholder="wirte your To Do list..."
        />
        <button>Add To Do</button>
      </div>
      <hr />
      <ul>
        {todoList.map((todo, idx) => (
          <li key={idx}>{todo}</li>
        ))}
      </ul>
    </form>
  );
}

export default App;
