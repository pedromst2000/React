import { configureStore, createSlice } from "@reduxjs/toolkit";
import todosData from "../todos.json";

const todosSilce = createSlice({
  name: "todos",
  initialState: {
    todos: todosData,
  },
  reducers: {
    addTodo: (state, action) => {
      return {
        ...state,
        todos: [...state.todos, {
            id: state.todos.length + 1,
            task: action.payload.task,
            category: action.payload.category,
            completed: false,
        }],
      };
    },
    updateTodo: (state, action) => {
      return {
        //   change the status completed or not
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
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };
    }
  },
});

export const todosActions = todosSilce.actions;

const store = configureStore({
  reducer: todosSilce.reducer,
});

export default store;
