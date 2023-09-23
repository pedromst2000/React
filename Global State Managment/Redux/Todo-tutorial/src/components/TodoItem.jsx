import React from 'react'
import PropTypes from 'prop-types'

function TodoItem({...props}) {
  return (
    <tr>
        <td>{props.todo.task}</td>
        <td>{props.todo.completed ? "Finished" : "Pending"}</td>
        <td>{props.todo.category}</td>
        <td>
            <button
                onClick={() => props.handleDeleteTodo(props.todo)}
            >
                Delete
            </button>
            &ensp;
            <button
                onClick={() => props.handleUpdateTodo(props.todo)}
            >
                {
                    props.todo.completed ? "Mark as Pending" : "Mark as Finished"
                }
            </button>
        </td>
    </tr>
    )
}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    handleDeleteTodo: PropTypes.func.isRequired,
    handleUpdateTodo: PropTypes.func.isRequired,
}

export default TodoItem
