import React from 'react'
import PropTypes from 'prop-types'
import { useParams } from 'react-router-dom'

function Todo(props) {
 
 const { id } = useParams();
 
  return (
    <>
      <h3>Todo {id}</h3>
    </>
    )
}

Todo.propTypes = {}

export default Todo
