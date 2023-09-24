import { useSelector, useDispatch } from "react-redux";
import { todosActions } from "./stores/TodosSlice";
import { useEffect, useState } from "react";
import FilterTodos from "./components/FilterTodos";
import Todos from "./components/Todos";
import AddTodo from "./components/AddTodo";

function App() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const [searchTodo, setSearchTodo] = useState("");
  const [filterCategory, setFilterCategory] = useState("all");

  useEffect(() => {
    console.log(todos);
  }, [todos]);

  return (
    <>
      <FilterTodos
        setSearchTodo={setSearchTodo}
        setFilterCategory={setFilterCategory}
      />
      <Todos
        todos={todos
          .filter((todo) => {
            if (filterCategory === "all") {
              return todo;
            } else {
              return todo.category === filterCategory;
            }
          })
          .filter((todo) => {
            return todo.task.toLowerCase().includes(searchTodo.toLowerCase());
          })}
        dispatch={dispatch}
        actions={todosActions}
      />
      <AddTodo dispatch={dispatch} actions={todosActions} todos={todos} />
    </>
  );
}

export default App;
