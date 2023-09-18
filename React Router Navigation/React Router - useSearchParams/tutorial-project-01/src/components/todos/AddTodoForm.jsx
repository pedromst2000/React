import React from "react";
import Proptypes from "prop-types";

function AddTodoForm({ ...props }) {
  return (
    <form
      onSubmit={
        (e) => {
          e.preventDefault();
          props.handleAddTodo();
        }
      }
    >
      <h3>Add a task</h3>
      <input
        type="text"
        placeholder="task"
        value={props.task}
        onChange={(e) => props.setTask(e.target.value)}
      />
      <select
        value={props.category}
        onChange={(e) => props.setCategory(e.target.value)}
      >
        <option value="select a category">Select a category</option>
        {props.categoriesTodos.map((category) => (
          <option key={category.id} value={category.category}>
            {category.category}
          </option>
        ))}
      </select>
      <button>Add</button>
    </form>
  );
}

AddTodoForm.propTypes = {
  todos: Proptypes.array.isRequired,
  dispatch: Proptypes.func.isRequired,
  User: Proptypes.object.isRequired,
  users: Proptypes.array.isRequired,
  task: Proptypes.string.isRequired,
  setTask: Proptypes.func.isRequired,
  category: Proptypes.string.isRequired,
  setCategory: Proptypes.func.isRequired,
  categoriesTodos: Proptypes.array.isRequired,
  handleAddTodo: Proptypes.func.isRequired,
};

export default AddTodoForm;
