import styles from "./index.module.css";
import { useState } from "react";

function AddTodo({ onNewTodo }) {
  // When local storage was used
  // const [todos, setTodos] = useLocalStorage('TODO_KEY', []);

  // Save todo in database
  const [todo, setTodo] = useState("");

  function collectInput(event) {
    setTodo(event.target.value);
  }

  async function saveTodo() {
    const response = await fetch("http://localhost:4000/todos", {
      method: "POST",
      body: JSON.stringify({ title: todo }),
      headers: { "Content-Type": "application/json" },
    });
    const data = await response.json();
    // Call the function to update the parent state
    onNewTodo(data);
    // Clear the input field
    setTodo("");
  }

  function handleKeyDown(event) {
    if (event.key === 'Enter') {
        saveTodo();
    }
}

  return (
    <section className={styles.addTodo}>
      <input
        value={todo}
        onChange={collectInput}
        onKeyDown={handleKeyDown}
        className={styles.addTodoInput}
        placeholder="Start typing...."
      />
      <button className="btn btn-primary" onClick={saveTodo}>
        Create
      </button>
    </section>
  );
}

export default AddTodo;
