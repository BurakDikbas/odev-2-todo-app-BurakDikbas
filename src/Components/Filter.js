import React from 'react'
import ClearBtn from './ClearBtn'
import FilterBtn from './FilterBtn'

function Filter() {
    return (
    <footer class="footer">
        <span class="todo-count">
          <strong>2</strong> items left
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
