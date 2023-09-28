import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function TodoItem({ ...props }) {
  return (
    <>
      {
        <tr key={props.index}>
          <td>{props.index}</td>
          <td>{props.todo.task}</td>
          <td>
            {
              props.categories?.find(
                (category) => category.id === props.todo.categoryID
              ).name
            }
          </td>
          <td>{props.todo.completed ? "Completed" : "Pending"}</td>
          <td>
            
            &nbsp;
            <button
                   onClick={() => {
                     props.handleUpdateTodo(props.todo.id, !props.todo.completed);
                   }}
                 >
                   {props.todo.completed ? "Mark as Pending" : "Mark as Complete"}
                 </button>
            &ensp;
            <button>
              <Link to={`/todos/${props.todo.id}`}>See Details</Link>
            </button>
          </td>
        </tr>
      }
    </>
  );
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
  User: PropTypes.object.isRequired,
  users: PropTypes.array.isRequired,
  categories: PropTypes.array.isRequired,
  handeDeleteTodo: PropTypes.func.isRequired,
  handleUpdateTodo: PropTypes.func.isRequired,
};

export default TodoItem;
