import { createSlice } from "@reduxjs/toolkit";
import todosData from "../data/todos.json";

// persisting data with localStorage
const todos = localStorage.getItem("todos") === null ? 
localStorage.setItem("todos", JSON.stringify(todosData)) : JSON.parse(localStorage.getItem("todos"));

export const todosSlice = createSlice({
  name: "todos",
  initialState: {
    todos: todos,
  },
  // state and actions
  reducers: {
    // Add - Create
    addTodo: (state, action) => {
      // body
      const newTodo = {
        id: state.todos.length + 1,
        task: action.payload.task,
        categoryID: action.payload.categoryID,
        completed: false,
        description: action.payload.description,
        creatorID: action.payload.creatorID,
      };

      state.todos = [...state.todos, newTodo]; // state.todos.push(newTodo);

      // updating the state in localStorage
      localStorage.setItem("todos", JSON.stringify(state.todos));

      return state;
    },
    // Update
    toggleCompleteTodo: (state, action) => {
      const { id, status } = action.payload; // action.payload.id, action.payload.status

      const todo = state.todos.find((todo) => todo.id === id);

      state.todos = [
        ...state.todos.filter((todo) => todo.id !== id),
        {
          ...todo,
          completed: status,
        },
      ];
      // updating the state in localStorage
      localStorage.setItem("todos", JSON.stringify(state.todos));

      return state;
    },
    // Delete
    deleteTodo: (state, action) => {
      const { id } = action.payload; // action.payload.id

      state.todos = [...state.todos.filter((todo) => todo.id !== id)];
    
      // updating the state in localStorage
      localStorage.setItem("todos", JSON.stringify(state.todos));
      
      return state;
    },
  },
});

// actions
export const todosActions = todosSlice.actions;
