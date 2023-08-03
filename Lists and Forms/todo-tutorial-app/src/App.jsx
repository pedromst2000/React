import FormTodo from "./Components/FormTodo";
import MessageForm from "./Components/MessageForm";
import TodoList from "./Components/TodoList";
import { useState } from "react";
import { useEffect } from "react";

export default function App() {
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("todos");

    if (savedTodos == null) return [];

    return JSON.parse(savedTodos);
  });

  // useEffect for save todos in localStorage
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  function addTask(task) {
    setTodos((currentTodos) => {
      return [
        ...currentTodos,
        { id: todos.length + 1, task: task, completed: false },
      ];
    });
  }

  function toggleTask(id, completed) {
    setTodos((currentTodos) => {
      return currentTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed };
        }
        return todo;
      });
    });
  }

  function deleteTask(id) {
    setTodos((currentTodos) => {
      return currentTodos.filter((todo) => todo.id !== id);
    });
  }

  function emptyTask(task) {
    if (task.trim() === "") {
      return false;
    }
    return true;
  }

  function invalidTask(task) {
    const taskTrim = task.trim().toLowerCase().replace(/\s+/g, "-");
    const taskTrim2 = task.trim().toLowerCase().replace(/\s+/g, " ");
    const taskTrim3 = task.trim().toLowerCase().replace(/\s+/g, "_");

    for (let i = 0; i < todos.length; i++) {
      if (
        todos[i].task.toLowerCase() === taskTrim ||
        todos[i].task.toLowerCase() === taskTrim2 ||
        todos[i].task.toLowerCase() === taskTrim3
      ) {
        return true;
      }
    }

    return false;
  }

  return (
    <div className="form-container">
      <MessageForm message="Form Todo" />
      <FormTodo
        addTask={addTask}
        emptyTask={emptyTask}
        invalidTask={invalidTask}
      />
      <TodoList deleteTask={deleteTask} toggleTask={toggleTask} todos={todos} />
    </div>
  );
}
