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

    async function saveTodo () {
    // Post todo to todo-api
    const response = await fetch('http://localhost:4000/todos', {
        method: 'POST',
        body: JSON.stringify({
            title: todo
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    const data = await response.json();
    console.log(data);
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