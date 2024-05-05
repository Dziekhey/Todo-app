function TodoItem({todo, index}) {

   const deleteOne =async () => {
        // Delete todos from todo-api
        const response = await fetch(`http://localhost:4000/todos/${todo._id}`, {
          method: "DELETE",
        });
        const data = await response.json();
        console.log(data);
     
      }

    return (
        <li className="list-group-item d-flex justify-content-between" key={index}>
            <div>
                <input className="form-check-input me-4" type="checkbox" />
                <span className="me-5">{todo.title}</span>
            </div>
            <button className="btn btn-danger" onClick={deleteOne}>Delete</button>
        </li>
    );
}

export default TodoItem;