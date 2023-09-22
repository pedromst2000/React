import React from 'react'
import PropTypes from 'prop-types'

function TodoItem({...props}) {
  return (
        <tr>
            <td>{props.todo.task}</td>
            <td>{
                    props.todo.completed ?
                    <span className="completed">Completed</span> :
                    <span className="not-completed">Pending</span>
                }</td>
            <td>{props.todo.category}</td>
            <td>
                <button
                    onClick={()=>{
                        props.handleDelete(props.todo.id);
                    }}
                >
                    Delete
                </button>
                <button
                    onClick={()=>{
                        props.handleUpdate(props.todo.id, !props.todo.completed);
                    }}
                >
                    {
                        props.todo.completed ?
                        "Pending" :
                        "Finish"
                    }
                </button>
            </td>
        </tr>
  )
}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    handleDelete: PropTypes.func.isRequired,
    handleUpdate: PropTypes.func.isRequired
}

export default TodoItem
