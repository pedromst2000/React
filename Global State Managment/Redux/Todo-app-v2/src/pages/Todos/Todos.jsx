import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { todosActions } from "../../store/TodosSlice";
import TodosList from "../../components/todos/TodosList";
import FilterTodos from "../../components/todos/FilterTodos";

export default function Todos() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [isFilterCategory, setIsFilterCategory] = useState(false);
  const [isFilterSearch, setIsFilterSearch] = useState(false);
  const todos = useSelector((state) => state.todos.todos);
  const User = useSelector((state) => state.users.User);
  const users = useSelector((state) => state.users.users);
  const categories = useSelector((state) => state.categories.categories);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("search", search);

    console.log("category", category);
  }, [search, category]);

  const filterLoggedTodos = () => {

    if (!User?.isLogged) return [];

    if (User?.role === "unsigned") return [];
   
    else if (User?.role === "regular" || User?.role === "admin") {
      const loggedUserID = users?.find(
        (user) => user.username === User?.username
      ).id;

      const filterLoggedTodos = todos?.filter(
        (todo) => todo.creatorID === loggedUserID
      );

        return filterLoggedTodos;

    }
  };

  const handeDeleteTodo = (id) => {
    const confirm = window.confirm(
      "Are you sure you want to delete this todo?"
    );

    if (!confirm) return;
    else {
      dispatch(
        todosActions.deleteTodo({
          id: id,
        })
      );
    }
  };

  const handleUpdateTodo = (id, status) => {
    dispatch(
      todosActions.toggleCompleteTodo({
        id: id,
        status: status,
      })
    );
  };

  return (
    <div className="todos-container">
      <div className="todos-filter">
        <FilterTodos
          categories={categories}
          setSearch={setSearch}
          setCategory={setCategory}
        />
      </div>
      <div className="todos-list">
        <TodosList
          todos={User?.isLogged ? filterLoggedTodos() : todos}
          User={User}
          users={users}
          categories={categories}
          handeDeleteTodo={handeDeleteTodo}
          handleUpdateTodo={handleUpdateTodo}
        />
      </div>
    </div>
  );
}
