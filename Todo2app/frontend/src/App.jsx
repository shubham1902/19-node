import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { CreateTodo } from "./components/createtodo.jsx";
import { Todos } from "./components/Todos.jsx";

function App() {
  const [todos, setTodos] = useState([]);
  async function fetchTodos() {
    const value = await fetch("http://localhost:3000/todos");
    //console.log(value);
    const data = await value.json();
    setTodos(data.todos);
    //console.log(data, typeof data);
  }
  fetchTodos();
  return (
    <div>
      <CreateTodo></CreateTodo>
      <Todos todos={todos}></Todos>
    </div>
  );
}

export default App;
