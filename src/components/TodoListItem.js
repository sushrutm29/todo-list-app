import React from 'react'

function TodoListItem(props) {
    return (
        <div className="todoListItem">
            <p className="todo-title" key={props.todo.id}>{props.todo.title}</p>
        </div>
    )
}

export default TodoListItem
