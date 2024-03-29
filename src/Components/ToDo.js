import classes from './ToDo.module.css'
// import React, { useState } from 'react';


function ToDo({todo, onDelete}) {
    // const [line, setLine] = useState([]);

    // const handleClick = () => {
        
    // }

    

    return(
        <>
             <div className={classes.todoContainer}>
                <ul className={classes.todo}>
                    {todo && todo.map((value, index) => (
                        <li key={index} className={classes.li}>{value} 
                        <button className={classes.delButton} onClick={() => onDelete(index)}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/>
                            <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/>
                            </svg>
                        </button >

                        {/* <button className={classes.done} onClick={handleClick}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check" viewBox="0 0 16 16">
                            <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425z"/>
                            </svg>
                        </button> */}
                        {/* {line[index] && <hr className={classes.showLine} />}    */}
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}

export default ToDo;




// const [showLine, setShowLine] = useState(todo ? Array(todo.length).fill(false) : []);

// const handleClick = (index) => {
//     const newShowLines = [...showLine];
//     newShowLines[index] = !newShowLines[index];
//     setShowLine(newShowLines);
//     setShowLine(!showLine); // Toggle the value (if true, set to false; if false, set to true)
//   };
  