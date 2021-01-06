import React from 'react'
import {useState} from "react"

function Task(props) {
    const [checked, setChecked] = useState(props.completed ? true : false)
    function handleInputChange(e) {
        setChecked(e.target.checked);
        
    }

    function removeId(key) {
        props.onChange(key)
        
    }
    return (
        <li className={checked ? "completed" : ""}>
            <div class="view">
                <input class="toggle" type="checkbox" onChange={handleInputChange} checked={checked} />
                <label>{props.task}</label>
                <button class="destroy" onClick={()=>removeId(props.id)}></button>
            </div>
        </li>
    )
}

export default Task
