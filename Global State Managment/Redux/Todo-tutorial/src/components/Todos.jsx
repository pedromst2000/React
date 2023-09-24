import React from "react";
import PropTypes from "prop-types";
import TodoItem from "./TodoItem";

function Todos({ ...props }) {
  const handleDeleteTodo = (id) => {
    const confirm = window.confirm(
      "Are you sure you want to delete this todo?"
    );

    if (!confirm) return;
    else {
      props.dispatch(props.actions.deleteTodo(id));

      alert("Todo deleted successfully");
    }
  };

  const handleUpdateTodo = (id, status) => {
    props.dispatch(
      props.actions.updateTodo({
        id,
        status,
      })
    );

  };

  return (
    <table>
      <thead>
        <tr>
          <th>Task</th>
          <th>Category</th>
          <th>Status</th>
          <th>Options</th>
        </tr>
      </thead>
      <tbody>
        {props.todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            deleteTodo={handleDeleteTodo}
            updateTodo={handleUpdateTodo}
          />
        ))}
      </tbody>
    </table>
  );
}

Todos.propTypes = {
  todos: PropTypes.array.isRequired,
  dispatch: PropTypes.func.isRequired,
  actions: PropTypes.object.isRequired,
};

export default Todos;
