import React, { useState } from "react";
import PropTypes from "prop-types";

function AddTodo({ ...props }) {
  const [task, setTask] = useState("");
  const [category, setCategory] = useState("Select category");

  const handleAddTodo = (task, category) => {
    
        console.log(task, category);
    
    if (task == "" || category == "Select category") {
      alert("Please fill all the fields");
      return;
    }  if (props.todos.some((todo) => todo.task === task)) {
      alert("Task already exists");
      return;
    } else {
      props.dispatch(
        props.actions.addTodo({
          // payload
          task,
          category,
        })
      );

      alert("Todo added successfully");
    }
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleAddTodo(task, category);
      }}
    >
      <input
        type="text"
        placeholder="Task"
        onChange={(e) => setTask(e.target.value)}
      />
      <select name="category" onChange={(e) => setCategory(e.target.value)}>
        <option value="Select category">Select category</option>
        <option value="chores">Chores</option>
        <option value="work">Work</option>
        <option value="hobby">Hobby</option>
        <option value="health">Health</option>
      </select>

      <input type="submit" value="Add Task" />
    </form>
  );
}

AddTodo.propTypes = {
  dispatch: PropTypes.func.isRequired,
  actions: PropTypes.object.isRequired,
  todos: PropTypes.array.isRequired,
};

export default AddTodo;
