import React from "react";
import PropTypes from "prop-types";
import TodoItem from "./TodoItem";
import FormAdd from "./FormAdd";

function Todos({ ...props }) {

  const handelDeleteTodo = (todo) => {
    const confirm = window.confirm(
      "Are you sure you want to delete this todo?"
    );

    if (!confirm) return;
    else {
      props.dispatch(
        props.actions.deleteTodo({
          //payload
          id: todo.id,
        })
      );
    }
  };

  const handleUpdateTodo = (todo) => {
    props.dispatch(
      props.actions.updateTodo({
        //payload
        id: todo.id,
        status: !todo.completed,
      })
    );
  };

  const handleAddTodo = (task, category) => {

    if(task === '' && category === '') {

        return alert('Please fill out all fields');
    }

    if(props.todos.some(todo => todo.task === task)) {

        return alert('Task already exists');
    }

    else {
            
            props.dispatch(
                props.actions.addTodo({
                    // payload
                    id: props.todos.length + 1,
                    task: task,
                    completed: false,
                    category: category,
                })
            );

            return alert('Task added successfully');
    }


  };

  return (
    <>
      <table border="1">
        <thead>
          <tr>
            <th>Task</th>
            <th>Status</th>
            <th>Category</th>
            <th>Options</th>
          </tr>
        </thead>
        <tbody>
          {props.todos.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              handleDeleteTodo={handelDeleteTodo}
              handleUpdateTodo={handleUpdateTodo}
            />
          ))}
        </tbody>
      </table>
            <br />
      <FormAdd 
        handleAddTodo={handleAddTodo}
      />
    </>
  );
}

Todos.propTypes = {
  todos: PropTypes.array.isRequired,
  dispatch: PropTypes.func.isRequired,
  actions: PropTypes.object.isRequired,
};

export default Todos;
