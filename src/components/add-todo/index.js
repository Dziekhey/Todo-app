import styles from './index.module.css';
import {useLocalStorage} from 'usehooks-ts';
import {useState} from 'react'

function AddTodo() {
    const [todos, setTodos] = useLocalStorage('TODO_KEY',[]);
    // let todo;
    const [todo,setTodo] = useState('');

function collectInput (event) {
    // todo = event.target.value;
    setTodo(event.target.value)
}

// const collectInput = (event) => {
//     setTodo(event.target.value);
// }

function saveTodo () {
    // Add new todo to existing list of todo's
    // todos.push(todo);
    // Set all todo's in local storage
    setTodos([...todos, todo]);
    // wipe the input
    setTodo('');
}

    return (
        <section className={styles.addTodo}>
            <input 
            value={todo}
            onChange={collectInput}
            className={styles.addTodoInput} 
            placeholder="Start typing...." />
            <button className= "btn btn-primary" onClick={saveTodo}>Create</button>
        </section>
    );
}

export default AddTodo;