import PropTypes from "prop-types";
import { useState } from "react";

function FormTodo({ addTask, emptyTask, invalidTask }) {
  const [task, setTask] = useState("");
  const [messageValidTask, setMessageValidTask] = useState("");
  const [isemptytask, setIsEmptyTask] = useState(false);
  const [isinvalidtask, setIsInvalidTask] = useState(false);

  const showmMessage = (message) => {
    setMessageValidTask(message);
    setTimeout(() => {
      setMessageValidTask("");
    }, 2000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (invalidTask(task)) {
      setIsInvalidTask(true);
      showmMessage("task already exists");
    }

    else if (emptyTask(task)) {
      addTask(task);
      setTask("");
      setIsEmptyTask(false);
    }

    else if (!emptyTask(task)) {
      setIsEmptyTask(true);
      showmMessage("task is required");
    }
  };

  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="New Task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <span className="task-required">
          {isemptytask || isinvalidtask ? messageValidTask : ""}
        </span>
        <input type="submit" value="Add" />
      </form>
    </div>
  );
}

FormTodo.propTypes = {
  addTask: PropTypes.func.isRequired,
  emptyTask: PropTypes.func.isRequired,
  invalidTask: PropTypes.func.isRequired,
};

export default FormTodo;
