import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function TodoItem({ ...props }) {
  return (
    <tr
      className={
        props.todo.completed ? "todo-item-completed" : "todo-item-pending"
      }
    >
      <td>{props.todo.task}</td>
      <td style={{ textAlign: "center" }}>
        {
          props.categories.find(
            (category) => category.id === props.todo.categoryID
          ).category
        }
      </td>
      <td>{props.todo.completed ? "Completed" : "Pending"}</td>
      <td>
        {props.users.find((user) => user.id === props.todo.creatorID)
          .username == props.User.username ? (
          props.todo.completed ? (
            <>
              <div className="btns-options">
                <button
                  onClick={() => props.handleDeleteTodo(props.todo.id)}
                  className="btn-delete"
                >
                  Delete
                </button>
                <button 
                  onClick={() => props.handleUpdateTodo(props.todo.id)}
                className="btn-pending">Pending</button>
                <button className="btn-link">
                  <Link to={`/todos/${props.todo.id}`}>See Details</Link>
                </button>
              </div>
            </>
          ) : (
            <>
              <div className="btns-options">
                <button
                  onClick={() => props.handleDeleteTodo(props.todo.id)}
                  className="btn-delete"
                >
                  Delete
                </button>
                <button 
                  onClick={() => props.handleUpdateTodo(props.todo.id)}
                className="btn-finish">Finish</button>
                <button className="btn-link">
                  <Link to={`/todos/${props.todo.id}`}>See Details</Link>
                </button>
              </div>
            </>
          )
        ) : (
          <>
            <div className="btns-options">
              <button className="btn-link">
                <Link to={`/todos/${props.todo.id}`}>See Details</Link>
              </button>
            </div>
          </>
        )}
      </td>
    </tr>
  );
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  categories: PropTypes.array.isRequired,
  users: PropTypes.array.isRequired,
  User: PropTypes.object.isRequired,
  handleDeleteTodo: PropTypes.func.isRequired,
  handleUpdateTodo: PropTypes.func.isRequired,
};

export default TodoItem;
