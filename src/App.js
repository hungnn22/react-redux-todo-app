import TodoList from "./components/TodoList";
import "./App.css"
import { useEffect } from "react";

function App() {

  useEffect(() => {
    console.log("APP");
  }, [])

  return (
    <div className="todo-app">
      <TodoList />
    </div>
  );
}

export default App;
