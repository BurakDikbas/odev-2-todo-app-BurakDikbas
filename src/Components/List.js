import React from 'react'

import Task from "./Task"

function List() {
    const list=[
        {completed:"completed", name:"Learn JavaScript"},
        {completed:"", name:"Learn React"},
        {completed:"", name:"Have a life!"},
    ]
    return (
        <ul class="todo-list">
            {list.map((task, i)=>
            <Task key={i} completed={task.completed} task={task.name}/>
            )}
        </ul>
        
    )
}

export default List
