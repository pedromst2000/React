import React, { useEffect, useState } from "react";
import TodosList from "../../components/todos/TodosList";
import useTodosProvider from "../../hooks/useTodosProvider";
import useAuthProvider from "../../hooks/useAuthProvider";
import FilterSearch from "../../components/todos/FilterSearch";
import Loading from "../../components/Loading";
import { useSearchParams } from "react-router-dom";

function Todos() {
  const { todos, categoriesTodos, myTodos, allTodos } = useTodosProvider();
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
        <TodosList
          categories={categoriesTodos}
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
      )}
    </>
  );
}

export default Todos;
