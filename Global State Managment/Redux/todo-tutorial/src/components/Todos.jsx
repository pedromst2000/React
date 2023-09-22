import React from 'react'
import PropTypes from 'prop-types'
import TodoItem from './TodoItem'

function Todos({...props}) {
  
    const handleDelete = (id) => {

        const confirm = window.confirm('Are you sure you want to delete this todo?');

        if(!confirm) return;

        else{
            props.dispatch({type: 'DELETE_TODO', payload: id});


            alert('Todo deleted successfully!');
        }

    };

    const handleUpdate = (id, status) => {

        props.dispatch({type: 'UPDATE_TODO', payload: {id, status}});

        alert('Todo updated successfully!');

    };
  
  
    return (
    <table>
        <thead>
            <tr>
                <th>Task</th>
                <th>Status</th>   
                <th>Category</th>
                <th>Options</th>
            </tr>
        </thead>   
        <tbody>
            {props.todos.map(todo => <TodoItem key={todo.id} todo={todo}
            handleDelete={handleDelete} handleUpdate={handleUpdate}
            />)}
        </tbody>
    </table>
  )
}

Todos.propTypes = {
    todos: PropTypes.array.isRequired,
    dispatch: PropTypes.func.isRequired
}

export default Todos
