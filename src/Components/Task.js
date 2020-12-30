import React from 'react'

function Task(props) {
    return (
        <li className={props.completed}>
        <div class="view">
        <input class="toggle" type="checkbox" />
        <label>{props.task}</label>
        <button class="destroy"></button>
        </div>
        </li>
    )
}

export default Task
