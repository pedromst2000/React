import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { todosActions } from "../../store/TodosSlice";
import TodosList from "../../components/todos/TodosList";
import FilterTodos from "../../components/todos/FilterTodos";
import { Link } from "react-router-dom";


export default function Todos() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const todos = useSelector((state) => state.todos.todos);
  const User = useSelector((state) => state.users.User);
  const users = useSelector((state) => state.users.users);
  const categories = useSelector((state) => state.categories.categories);
  const dispatch = useDispatch();

  useEffect(() => {

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
        {User?.isLogged  ? (
          <FilterTodos
            categories={categories}
            setSearch={setSearch}
            setCategory={setCategory}
          />
        ) : null}
      </div>
      <div className="todos-list">
        <TodosList
          todos={
          //   // filter bouth
           search !== "" && category != "All" ?
            filterLoggedTodos()?.filter(
              (todo) =>
                todo.task.toLowerCase().includes(search.toLowerCase()) 
                && 
                categories?.find(
                  (category) => category.id === todo.categoryID
                ).name.toLowerCase().includes(category.toLowerCase())
            ) 
            :
            // filter search
            search !== "" && category === "All" ?
            filterLoggedTodos()?.filter(
              (todo) =>
                todo.task.toLowerCase().includes(search.toLowerCase())
            )
            :
            // filter category
            search === "" && category !== "All" ?
            filterLoggedTodos()?.filter(
              (todo) =>
                categories?.find(
                  (category) => category.id === todo.categoryID
                ).name.toLowerCase().includes(category.toLowerCase())
            )
            :
              filterLoggedTodos() ? filterLoggedTodos() : []
          }
          User={User}
          users={users}
          categories={categories}
          handeDeleteTodo={handeDeleteTodo}
          handleUpdateTodo={handleUpdateTodo}
        />
      </div>
      {
        User && User.isLogged && User.role !== "unsigned" ? 
        <div className="todos-add">
            <button>
              <Link to="/todos/add">+ Add Todo</Link>
            </button>
        </div>
        :
        null
      }
    </div>
  );
}
