import React from 'react'
import { useState } from "react"


function NewTodo(props) {
    const [task, setTask] = useState("");
    
    return (
        <form onChange={props.handleChange}>
            <input className="new-todo"
                placeholder={props.placeholder}
                autoFocus
                onChange={(e)=> setTask(e.target.value)}
                value={task} />
        </form>
    )
}

export default NewTodo
