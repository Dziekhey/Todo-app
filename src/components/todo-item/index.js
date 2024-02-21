function TodoItem(props) {
    return (
        <li className="list-group-item d-flex justify-content-between" key={props.index}>
            <div>
                <input className="form-check-input me-4" type="checkbox" />
                <span className="me-5">{props.todo}</span>
            </div>
            <button className="btn btn-danger">Delete</button>
        </li>
    );
}

export default TodoItem;