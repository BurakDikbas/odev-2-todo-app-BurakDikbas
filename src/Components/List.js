import React from 'react'

import Task from "./Task"

function List({list}) {

    return (
        <ul class="todo-list">
            {list.map((task, i)=>
            <Task key={i} completed={task.completed} task={task.name}/>
            )}
        </ul>
        
    )
}

export default List
