import React from 'react'
import TodosList from '../../components/todos/TodosList'
import useTodosProvider from '../../hooks/useTodosProvider'

function Todos() {
  
  const {todos} = useTodosProvider();
  
  return (
    <>
      <TodosList
        todos={todos}
      />
    </>
    )
}


export default Todos
