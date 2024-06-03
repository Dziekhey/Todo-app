function TodoItem({ todo, onDeleteTodo }) {
  const deleteOne = async () => {
    await fetch(`https://todo-api-1bkn.onrender.com/todos/${todo._id}`, {
      method: "DELETE",
    });
    // Notify the parent about the deletion
    onDeleteTodo(todo._id);
  };

  return (
    <li className="list-group-item d-flex justify-content-between">
      <div>
        <input className="form-check-input me-4" type="checkbox" />
        <span className="me-5">{todo.title}</span>
      </div>
      <button className="btn btn-danger" onClick={deleteOne}>
        Delete
      </button>
    </li>
  );
}

export default TodoItem;
