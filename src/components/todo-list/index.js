import {useState, useEffect} from "react";
import {useLocalStorage} from 'usehooks-ts';

function TodoList() {
    // let todo;
    const [todos, setTodos] = useLocalStorage('TODO_KEY',[]);

    // function getTodos() {
    //     // Get all todos from local storage and store it.
    //     let todos = JSON.parse(localStorage.getItem('TODO_KEY')) || [];
    //     // Update react state
    //     setTodos(todos);
    // }

    // useEffect(getTodos, []);

    return (
        <ul>
            {todos.map(function(todo, index){
                return <li key={index}>{todo}</li>
            })}
        </ul>
    );
}

export default TodoList;