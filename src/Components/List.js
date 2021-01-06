import React from 'react'

import Task from "./Task"
import {useState, useEffect} from "react"

function List({todos,onChange}) {
    const [list, setList]= useState(todos)
    function handleSetList(id) {
        list.splice(id, 1)
        setList(list);
        onChange(list);
    }
    useEffect(() => {
        setList(todos)
    }, [todos])

    return (
        <ul class="todo-list">
            {list.map((task, i)=>
            <Task key={i} id={i} completed={task.completed} task={task.name} onChange={handleSetList}/>
            )}
        </ul>
        
    )
}

export default List
