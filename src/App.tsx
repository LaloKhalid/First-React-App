import { useState } from "react";
import './App.css';


function App() {
  const [todos, setTodos] = useState([
    "Learn React", 
    "Build a To-Do App", 
    "Celebrate"
  ]);

  const [newTodo, setNewTodo] = useState("");

  const handleAddTodo = () => {
    if (newTodo.trim() === "") return;
    setTodos([...todos, newTodo]);
    setNewTodo("");
  };

  const handleDeleteTodo = (indexToDelete) => {
    setTodos(todos.filter((_, index) => index !== indexToDelete));
  };

  return (
    <div>
      <h1>TO-Do-APP</h1>

      <input 
        type="text" 
        placeholder="Enter Task" 
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      
      <button onClick={handleAddTodo}>Add Task</button>

      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <button onClick={() => handleDeleteTodo(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
