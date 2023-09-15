import React, { createContext, useEffect, useReducer, useState } from "react";
import todosData from "../data/todos.json";

const TodosContext = createContext({});

export function TodosProvider({ children }) {
  const [todos, setTodos] = useState(() => {
    const todosStore = localStorage.getItem("todos");

    return todosStore ? JSON.parse(todosStore) : todosData;
  });

  const TodosReducer = (state, action) => {
    switch (action.type) {
      case "ADD_TODO":
        return [...state, action.payload];

      case "DELETE_TODO":
        return state.filter((todo) => todo.id !== action.payload);

      case "UPDATE_TODO":
        return state.map((todo) =>
          todo.id === action.payload.id ? action.payload : todo
        );

      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(TodosReducer, todosData);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);




  return (
    <TodosContext.Provider value={{ todos, dispatch }}>
      {children}
    </TodosContext.Provider>
  );
}

export default TodosContext;
