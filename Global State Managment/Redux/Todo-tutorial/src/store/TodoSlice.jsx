import { configureStore, createSlice } from "@reduxjs/toolkit";
import todosData from "../todos.json";

const todoSlice = createSlice({
  name: "todos",
  initialState: {
    todos: todosData,
  },
  // actions are functions that effect the state
  reducers: {
    addTodo: (state, action) => {
      return { ...state, todos: [...state.todos, action.payload] };
    },
    updateTodo: (state, action) => {
      return {
        ...state,
        todos: state.todos.map((todo) => {
            if (todo.id === action.payload.id) {
                return {
                    ...todo,
                    completed: action.payload.status,
                };
                }
                return todo;
            }),
      };
    },
    deleteTodo: (state, action) => {
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload.id),
      };
    },
  },
});

export const todosActions = todoSlice.actions;

export const store = configureStore({
  reducer: todoSlice.reducer,
});

export default store;
