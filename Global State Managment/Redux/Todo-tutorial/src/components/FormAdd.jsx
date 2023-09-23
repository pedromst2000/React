import React, { useState } from 'react'
import PropTypes from 'prop-types'

function FormAdd({ ...props }) {
 
 const [task, setTask] = useState('');
 const [category, setCategory] = useState('');
 
    return (
    <form
        onSubmit={(e) => {
            e.preventDefault();
            props.handleAddTodo(
                task,
                category
            );
            setTask('');
            setCategory('');
        }}
    >

        <input type="text" placeholder='task' 
            onChange={(e) => setTask(e.target.value)}
        />
        &ensp;
        <select
            onChange={(e) => setCategory(e.target.value)}
        >
            <option value="">Select Category</option>
            <option value="work">Work</option>
            <option value="personal">Personal</option>
            <option value="shopping">Shopping</option>
            <option value="hobby">hobby</option>
            <option value="health">health</option>            
            <option value="other">Other</option>
        </select>
        &ensp;
        <input type="submit" value="add task" />
    </form>
    )
}

FormAdd.propTypes = {
    handleAddTodo: PropTypes.func.isRequired,
}

export default FormAdd
