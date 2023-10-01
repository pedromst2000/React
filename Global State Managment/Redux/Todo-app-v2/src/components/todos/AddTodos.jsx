import React from 'react'
import PropTypes from 'prop-types'


function AddTodos({...props}) {
    
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        props.handleAddTodo();
      }}
    >
      <input type="text" placeholder='task' 
        onChange={(e) => props.setTask(e.target.value)}
      />
      <select
        onChange={(e) => props.setCategory(e.target.value)}
      >
        <option value="Select category">Select a category</option>
        {
          props.categories.map((category) => (
            <option key={category.id} value={category.id}>{category.name}</option>
          ))
        }
      </select>
      <textarea 
        onChange={(e) => props.setDescription(e.target.value)}
      cols="30" rows="10" placeholder='describe the task'></textarea>
      <input type="submit" value="Add Task" />
    </form>
    )
}

AddTodos.propTypes = {
  setTask: PropTypes.func.isRequired,
  setCategory: PropTypes.func.isRequired,
  setDescription: PropTypes.func.isRequired,
  handleAddTodo: PropTypes.func.isRequired,
  categories: PropTypes.array.isRequired,
}

export default AddTodos
