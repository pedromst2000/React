import React from "react";
import PropTypes from "prop-types";
import TodoItem from "./TodoItem";

function TodosList({ ...props }) {
  return (
    <table>
      <thead>
        <tr>
          <th>#</th>
          <th>Task</th>
          <th>Category</th>
          <th>Status</th>
          <th>Options</th>
        </tr>
      </thead>
      {!props.User?.isLogged ? (
        <tbody>
          <tr>
            <td colSpan="5">You need to be logged in to see your todos!</td>
          </tr>
        </tbody>
      ) : props.User?.role === "unsigned" ? (
        <tbody>
          <tr>
            <td colSpan="5">
              {" "}
              No todos available for you! You need permission of the admin to
              add your own todos and to check them!
            </td>
          </tr>
        </tbody>
      ) : 
            props.todos?.length === 0 ? (
                <tbody>
                    <tr>
                        <td colSpan="5">No todos available!</td>
                    </tr>
                </tbody>
                ) :
                (
                    <tbody>
                      {props.todos?.map((todo, index) => (
                        <TodoItem
                          key={index + 1}
                          index={index + 1}
                          todo={todo}
                          User={props.User}
                          users={props.users}
                          categories={props.categories}
                          handeDeleteTodo={props.handeDeleteTodo}
                          handleUpdateTodo={props.handleUpdateTodo}
                        />
                      ))}
                    </tbody>
                  )
      }
    </table>
  );
}

TodosList.propTypes = {
  todos: PropTypes.array.isRequired,
  User: PropTypes.object.isRequired,
  users: PropTypes.array.isRequired,
  categories: PropTypes.array.isRequired,
  handeDeleteTodo: PropTypes.func.isRequired,
  handleUpdateTodo: PropTypes.func.isRequired
};

export default TodosList;
