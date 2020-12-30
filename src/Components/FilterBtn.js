import React from 'react'

function FilterBtn(props) {
    return (
        <a className={props.selected}>{props.name}</a>
    )
}

export default FilterBtn
