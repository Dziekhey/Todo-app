import { useState, useEffect } from "react";
import TodoItem from "../todo-item";
import AddTodo from "../add-todo";
// eslint-disable-next-line
import styles from "./index.module.css"

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(false);

  const getTodos = async () => {
    setLoading(true);
    const response = await fetch("https://todo-api-1bkn.onrender.com/todos");
    const data = await response.json();
    setTodos(data);
    setLoading(false);
  };

  async function deleteAll() {
    await fetch("https://todo-api-1bkn.onrender.com/todos", { method: "DELETE" });
    setTodos([]);
  }

  const handleNewTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  };

  const handleDeleteTodo = (deletedTodoId) => {
    setTodos(todos.filter((todo) => todo._id !== deletedTodoId));
  };

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <section>
      <AddTodo onNewTodo={handleNewTodo} />
      <button onClick={deleteAll} className="btn btn-danger my-4 ms-2">
        Delete All
      </button>
      {loading ? (
        <p>Loading......</p>
      ) : todos.length === 0 ? (
        <p>No Todos posted</p>
      ) : (
        <ul className="list-group">
          {todos.map((todo) => (
            <TodoItem
              key={todo._id}
              todo={todo}
              onDeleteTodo={handleDeleteTodo}
            />
          ))}
        </ul>
      )}
    </section>
  );
}

export default TodoList;
