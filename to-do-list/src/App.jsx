import React, { useEffect, useState } from 'react'

const App = () => {

  const [task, setTask] = useState("");
  const [todos, setTodos] = useState(() => {
    const saved = localStorage.getItem("todos");

    return saved ? JSON.parse(saved) : [];
  })

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = () => {
    if (task.trim() === "") return;

    const newTodo = {
      id: Date.now(),
      text: task,
      completed: false
    };

    setTodos([newTodo, ...todos]);
    setTask("");
  }

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) => todo.id === id ? { ...todo, completed: !todo.completed } : todo)
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <di>

      <h1>To-Do List</h1>

      <div>
        <input
          type='text'
          placeholder='Enter a task ....'
          value={task}
          onChange={(e) => setTask(e.target.value)}
          className="input-box"
        />
        <button onClick={addTodo}>Add</button>
      </div>

      <ul >

        {todos.length === 0 ? (
          <p className="empty-text">No tasks yet</p>
        ) : (
          todos.map((todo) => (

            <li
              key={todo.id}
            >
              <span
                onClick={() => toggleComplete(todo.id)}
                className={todo.completed ? "completed" : ""}
              >
                {todo.text}
              </span>

              <button
                onClick={() => deleteTodo(todo.id)}
              >
                delete
              </button>

            </li>
          ))
        )}
      </ul>

    </di>
  )
}

export default App;
