import { createSlice } from "@reduxjs/toolkit";
import todosData from "../data/todos.json";

// Load todos from localStorage or use an empty array as the initial state
const todos = JSON.parse(localStorage.getItem("todos")) || todosData;

export const todosSlice = createSlice({
  name: "todos",
  initialState: {
    todos: todos,
  },
  reducers: {
    addTodo: (state, action) => {
      const newTodo = {
        id: state.todos.length + 1,
        task: action.payload.task,
        category: action.payload.category,
        completed: false,
      };
      state.todos = [...state.todos, newTodo];
      // Update localStorage
      localStorage.setItem("todos", JSON.stringify(state.todos));
    },
    updateTodo: (state, action) => {
      const { id, status } = action.payload;
      const updatedTodos = state.todos.map((todo) =>
        todo.id === id ? { ...todo, completed: status } : todo
      );
      state.todos = updatedTodos;
      // Update localStorage
      localStorage.setItem("todos", JSON.stringify(state.todos));
    },
    deleteTodo: (state, action) => {
      const idToDelete = action.payload;
      state.todos = state.todos.filter((todo) => todo.id !== idToDelete);
      // Update localStorage
      localStorage.setItem("todos", JSON.stringify(state.todos));
    },
  },
});

export const todosActions = todosSlice.actions;
