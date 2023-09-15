import React from "react";
import PropTypes from "prop-types";
import categoriesData from "../../data/categories.json";
import todosData from "../../data/todos.json";
import useAuthProvider from "../../hooks/useAuthProvider";

function TodoItem({ ...props }) {

    
  return (
    <tr
      className={
        props.todo.completed ? "todo-item-completed" : "todo-item-pending"
      }
    >
      <td>{props.todo.task}</td>
      <td>
        {
          categoriesData.find(
            (category) => category.id === props.todo.categoryID
          ).category
        }
      </td>
      <td>{props.todo.completed ? "Completed" : "Pending"}</td>
      <td>{}</td>
    </tr>
  );
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
};

export default TodoItem;
