
import ClearBtn from './ClearBtn'
import FilterBtn from './FilterBtn'
import {useState, useEffect} from "react"

function Filter({todos}) {
    const [list, setList]= useState(todos)
    useEffect(() => {
        setList(todos)
    }, [todos])

    return (
    <footer class="footer">
        <span class="todo-count">
          <strong>{list.filter(t=>!t.checked).length}</strong> items left
            </span>
            <ul class="filters">
                <li>
                    <FilterBtn selected="selected" name="All"/>
                </li>
                <li>
                    <FilterBtn name="Active"/>
                </li>
                <li>
                    <FilterBtn name="Completed"/>
                </li>
            </ul>

       <ClearBtn/>
    </footer>
    )
}

export default Filter
