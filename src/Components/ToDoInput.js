import React, { useState } from 'react';
import classes from './ToDoInput.module.css';
import ToDo from './ToDo';



function ToDoInput() {

    const [todo, setTodo] = useState([]);
    const [newTodo, setNewTodo] = useState('');

    const submit = (event) => {
        setNewTodo(event.target.value);
        // event.preventDefault();
    }
      
    const addTodo = (event) => {
        event.preventDefault();

        if (newTodo.trim() !== '') {
            setTodo([...todo, newTodo]);
            setNewTodo('');
        }else {
            alert('The Input is Empty');
          }
        };
      
        const deleteTodo = (index) => {
          const updatedTodo = [...todo];
          updatedTodo.splice(index, 1);
          setTodo(updatedTodo);
        };



    return(
        <>
            <h1>Your To Do List</h1>
            <form className={classes.holder}>
                <input 
                className={classes.input}
                placeholder='Your To Do'
                id='userId'
                value={newTodo}
                onChange={submit}

                />


                <button className={classes.button} onClick={addTodo}>Add To Do</button>
            </form>
            <ToDo todo={todo} onDelete={deleteTodo}/>

            
        </>
    )
}

export default ToDoInput;