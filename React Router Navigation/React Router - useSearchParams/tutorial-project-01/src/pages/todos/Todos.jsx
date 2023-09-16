import React, { useState } from "react";
import TodosList from "../../components/todos/TodosList";
import useTodosProvider from "../../hooks/useTodosProvider";
import useAuthProvider from "../../hooks/useAuthProvider";

function Todos() {
  const { todos, categoriesTodos, myTodos, allTodos } = useTodosProvider();
  const { users, User } = useAuthProvider();
  const [isAllTodos, setIsAllTodos] = useState(true);
  const [isMyTodos, setIsMyTodos] = useState(false);

  return (
    <>
      <button
        className="btn-all-todos"
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
        className="btn-my-todos"
      >
        My Todos
      </button>

      <TodosList
        todos={todos}
        categories={categoriesTodos}
        users={users}
        User={User}
        isAllTodos={isAllTodos}
        isMyTodos={isMyTodos}
        myTodos={myTodos(User, users)}
        allTodos={allTodos(users)}
      />
    </>
  );
}

export default Todos;
