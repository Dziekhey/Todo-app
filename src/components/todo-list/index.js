import { useState, useEffect } from "react";
import TodoItem from "../todo-item";
import AddTodo from "../add-todo";

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(false);

  const getTodos = async () => {
    setLoading(true);
    const response = await fetch("http://localhost:4000/todos");
    const data = await response.json();
    setTodos(data);
    setLoading(false);
  };

  async function deleteAll() {
    await fetch("http://localhost:4000/todos", { method: "DELETE" });
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
