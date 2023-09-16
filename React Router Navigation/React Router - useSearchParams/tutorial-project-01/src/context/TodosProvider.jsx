import React, { createContext, useEffect, useReducer, useState } from "react";
import todosData from "../data/todos.json";
import categoriesData from "../data/categories.json";


const TodosContext = createContext({});

export function TodosProvider({ children }) {
  const [todos, setTodos] = useState(() => {
    const todosStore = localStorage.getItem("todos");

    return todosStore ? JSON.parse(todosStore) : todosData;
  });


  const [categoriesTodos, setCategoriesTodos] = useState(categoriesData);

  const TodosReducer = (state, action) => {
    switch (action.type) {
      case "ADD_TODO":
        return [
          setTodos([
            ...state,
            {
              id: state.length + 1,
              task: action.payload.task,
              completed: false,
              categoryID: action.payload.categoryID,
              creatorID: action.payload.creatorID,
            },
          ]),
        ];

      case "DELETE_TODO":
        return [
          setTodos(state.filter((todo) => todo.id !== action.payload.id)),
        ];

      case "UPDATE_TODO":
        return [
          //  update the status
          setTodos(
            state.map((todo) =>
              todo.id === action.payload.id
                ? { ...todo, completed: !todo.completed }
                : todo
            )
          ),
        ];

      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(TodosReducer, todosData);


  useEffect(() => {
    setCategoriesTodos(categoriesTodos);

    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos, categoriesTodos]);


  
const allTodos = (users) => {
  const allTodos = todos.map((todo) => {
    return {
      ...todo,
      creator: users.find((user) => user.id === todo.creatorID),
    };
  });

  return allTodos;

};

const myTodos = (User, users) => {

  const loggedUser = users.find((user) => user.username === User.username);

  const myTodos = todos.filter((todo) => todo.creatorID === loggedUser.id);

  return myTodos;

};

  return (
    <TodosContext.Provider value={{ todos, dispatch, categoriesTodos, allTodos, myTodos }}>
      {children}
    </TodosContext.Provider>
  );
}

export default TodosContext;
