import React, { useEffect, useState } from 'react'

const App = () => {

  const [task, setTask] = useState("");
  const [todos, setTodos] = useState(() => {
    const saved = localStorage.getItem("todos");

    return saved ? JSON.parse(saved) : [];
  })

  const [isEditing, setIsEditing] = useState(null); // stores the id of text that we are editing
  const [editText, setEditText] = useState(""); // new text

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

  const editTodo = (id, currentText) => {
    setIsEditing(id);
    setEditText(currentText);
  }

  const saveEdit = (id) => {
    setTodos(todos.map((todo) => todo.id === id ? { ...todo, text: editText } : todo));

    setIsEditing(null);
    setEditText("");
  };

  const enterTodoKey = (e) => {
    if (e.key === "Enter") {
      addTodo();
    }
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
          onKeyDown={enterTodoKey}
        />

        <button
          onClick={addTodo}
        >
          Add
        </button>

      </div>

      <ul>
        {todos.length === 0 ? (

          <p className="empty-text">No tasks yet</p>

        ) : (

          todos.map((todo) => (

            <li
              key={todo.id}
            >

              {isEditing === todo.id ? (
                <>

                  <input
                    type='text'
                    value={editText}
                    onChange={(e) => setEditText(e.target.value)}
                  />

                  <button
                    onClick={() => saveEdit(todo.id)}
                  >
                    Save
                  </button>

                </>
              ) : (
                <>
                  <span
                    onClick={() => toggleComplete(todo.id)}
                    className={todo.completed ? "completed" : ""}
                  >
                    {todo.text}
                  </span>

                  <div>

                    <button
                      onClick={() => editTodo(todo.id, todo.text)}
                    >
                      Edit
                    </button>

                    <button
                      onClick={() => deleteTodo(todo.id)}
                    >
                      delete
                    </button>
                  </div>
                </>
              )}



            </li>
          ))
        )}
      </ul>

    </di>
  )
}

export default App;
