import React from "react";
import PropTypes from "prop-types";
import TodoItem from "./TodoItem";

function TodosList({ ...props }) {



  return (
    <div className="table-todos">
      <table>
        <thead>
          <tr>
            <th>Task</th>
            <th>Category</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {

            props.isAllTodos ? props.allTodos.map((todo) => (
              <TodoItem
                key={todo.id}
                todo={todo}
                categories={props.categories}
                users={props.users}
                User={props.User}
              />
            )) : props.myTodos.map((todo) => (
              <TodoItem
                key={todo.id}
                todo={todo}
                categories={props.categories}
                users={props.users}
                User={props.User}
              />
            ))

}
        </tbody>
      </table>
    </div>
  );
}

TodosList.propTypes = {
  todos: PropTypes.array.isRequired,
  categories: PropTypes.array.isRequired,
  users: PropTypes.array.isRequired,
  User: PropTypes.object.isRequired,
  isAllTodos: PropTypes.bool.isRequired,
  isMyTodos: PropTypes.bool.isRequired,
  myTodos: PropTypes.array.isRequired,
  allTodos: PropTypes.array.isRequired,
};

export default TodosList;
