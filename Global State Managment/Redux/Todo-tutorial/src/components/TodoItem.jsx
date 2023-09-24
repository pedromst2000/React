import React from 'react'
import PropTypes from 'prop-types'

function TodoItem({todo, deleteTodo, updateTodo}) {
  return (
    <tr>
        <td>{todo.task}</td>
        <td>{todo.category}</td>
        <td>{todo.completed ? 'Completed' : 'Pending'}</td>
        <td>
            <button
                onClick={() => updateTodo(todo.id, !todo.completed)}
            >
                {todo.completed ? 'Mark Pending' : 'Mark Completed'}
            </button>
            &nbsp;
            <button
                onClick={() => deleteTodo(todo.id)}
            >
                Delete
            </button>
        </td>
    </tr>
    )
}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    deleteTodo: PropTypes.func.isRequired,
    updateTodo: PropTypes.func.isRequired,
}

export default TodoItem
