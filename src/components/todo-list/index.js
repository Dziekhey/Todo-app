import {useState, useEffect} from "react";
import {useLocalStorage} from 'usehooks-ts';
import TodoItem from "../todo-item";


function TodoList() {
    // let todo;
    const [todos, setTodos] = useLocalStorage('TODO_KEY',[]);

    function deleteAll () {
        setTodos([]);
    }

    // function getTodos() {
    //     // Get all todos from local storage and store it.
    //     let todos = JSON.parse(localStorage.getItem('TODO_KEY')) || [];
    //     // Update react state
    //     setTodos(todos);
    // }

    // useEffect(getTodos, []);

    return (
        <section>
            <button onClick={deleteAll} className="btn btn-danger my-4 ms-2">Delete All</button>
        <ul className="list-group">
            {todos.map(function(todo, index){
             return  <TodoItem todo={todo} index={index} />
            })}
        </ul>
        </section>
    );
}

export default TodoList;