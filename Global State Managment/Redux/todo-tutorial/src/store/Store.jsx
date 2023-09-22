import { createStore } from "redux";
import todosData from "../data/todos.json";

const initialState = todosData;

const storeReducer = (
  state = {
    todos: initialState,
  },
  action
) => {
  switch (action.type) {
  
    case "GET_TODOS":
        return {
            ...state,
            todos: action.payload
        }

    case "ADD_TODO":
        return {
            ...state,
            todos: [...state.todos, action.payload]
        }

    case "DELETE_TODO":
        return {
            ...state,
            todos: state.todos.filter(todo => todo.id !== action.payload)
        }

    case "UPDATE_TODO":
        return {
            ...state,
            // UPDATE THE STATUS
            todos: state.todos.map(todo => {
                if(todo.id === action.payload.id) {
                    todo.completed = action.payload.status;
                }
                return todo;
            })

        }

    default:
        return state; 
  }
};

const store = createStore(storeReducer);

export default store;
