import React from 'react'
import PropTypes from 'prop-types'
import TodoItem from './TodoItem'

function TodosList({...props}) {
  return (
    <table>
      <thead>
        <tr>
          <th>Task</th>
          <th>Category</th>
          <th>Status</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
      {props.todos.map(todo => (
        <TodoItem
          key={todo.id}
          todo={todo}
        />
      ))}
      </tbody>
    </table>
    )
}

TodosList.propTypes = {
  todos: PropTypes.array.isRequired
}

export default TodosList
