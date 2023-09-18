import React, { useEffect, useState } from "react";
import TodosList from "../../components/todos/TodosList";
import useTodosProvider from "../../hooks/useTodosProvider";
import useAuthProvider from "../../hooks/useAuthProvider";
import FilterSearch from "../../components/todos/FilterSearch";
import Loading from "../../components/Loading";
import { useSearchParams, Link } from "react-router-dom";

function Todos() {
  const { categoriesTodos, myTodos, allTodos, dispatch } = useTodosProvider();
  const { users, User } = useAuthProvider();
  const [isAllTodos, setIsAllTodos] = useState(true);
  const [isMyTodos, setIsMyTodos] = useState(false);
  const [search, setSearch] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get("search") || "";
  const [timeLoading, setTimeLoading] = useState(0);

  useEffect(() => {
    setSearchParams({ search: searchQuery });
  }, [setSearchParams]);

  const handleDeleteTodo = (id) => {
    const confirm = window.confirm(
      "Are you sure you want to delete this todo?"
    );

    if (!confirm) return;

    dispatch({
      type: "DELETE_TODO",
      payload: { id },
    });

    alert("Todo deleted successfully!");
  };

  const handleUpdateTodo = (id) => {
    dispatch({
      type: "UPDATE_TODO",
      payload: { id },
    });
  };

  return (
    <>
      <div className="buttons-container">
        <button
          className={
            isAllTodos
              ? "btn-all-todos btn-selected"
              : "btn-all-todos btn-unselected"
          }
          onClick={() => {
            setIsAllTodos(true);
            setIsMyTodos(false);
          }}
        >
          All Todos
        </button>
        <button
          onClick={() => {
            setIsAllTodos(false);
            setIsMyTodos(true);
          }}
          className={
            isMyTodos
              ? "btn-my-todos btn-selected"
              : "btn-my-todos btn-unselected"
          }
        >
          My Todos
        </button>
      </div>
      <div className="filter-area">
        <FilterSearch search={search} setSearch={setSearch} />
      </div>

      {timeLoading < 2 ? (
        <Loading timeLoading={timeLoading} setTimeLoading={setTimeLoading} />
      ) : (
        <>
          <TodosList
            categories={categoriesTodos}
            handleDeleteTodo={handleDeleteTodo}
            handleUpdateTodo={handleUpdateTodo}
            users={users}
            User={User}
            isAllTodos={isAllTodos}
            isMyTodos={isMyTodos}
            allTodos={
              search !== ""
                ? allTodos(users).filter((todo) =>
                    todo.task.toLowerCase().includes(search.toLowerCase())
                  )
                : searchQuery !== ""
                ? allTodos(users).filter((todo) =>
                    todo.task.toLowerCase().includes(searchQuery.toLowerCase())
                  )
                : allTodos(users)
            }
            myTodos={
              search !== ""
                ? myTodos(User, users).filter((todo) =>
                    todo.task.toLowerCase().includes(search.toLowerCase())
                  )
                : searchQuery !== ""
                ? myTodos(User, users).filter((todo) =>
                    todo.task.toLowerCase().includes(searchQuery.toLowerCase())
                  )
                : myTodos(User, users)
            }
          />
          <div className="btn-add-container">
            <button className="btn-add-link">
              <Link to="/todos/add">
                <div className="content-add-btn">
                  <span>+</span>
                  <span>Add Todo</span>
                </div>
              </Link>
            </button>
          </div>
        </>
      )}
    </>
  );
}

export default Todos;
