import React, { useEffect, useState } from "react";
import Loading from "../../components/Loading";
import AddTodoForm from "../../components/todos/AddTodoForm";
import useTodosProvider from "../../hooks/useTodosProvider";
import useAuthProvider from "../../hooks/useAuthProvider";

export default function AddTodo() {
  const [timeLoading, setTimeLoading] = useState(0);
  const { todos, dispatch, categoriesTodos } = useTodosProvider();
  const { User, users } = useAuthProvider();
  const [task, setTask] = useState("");
  const [category, setCategory] = useState("");


  const findCategory = (categoryName) => {

    const categoryID = categoriesTodos.find((category) => category.category === categoryName);

    return categoryID.id;
  };

  const findCreatorId = (username) => {

    const creatorID = users.find((user) => user.username === username);

    return creatorID.id;

  };


  const handleAddTodo = () => {
    if (task == "" || category == "") {
      alert("task and category are required !!");
    }

    else if (todos.some((todo) => todo.task == task)) {
      alert("the task already exists");
    } else {

      dispatch({
        type: "ADD_TODO",
        payload: {
          task: task,
          categoryID: findCategory(category),
          creatorID: 
          findCreatorId(User.username),
        },
      });

      setTask("");
      setCategory("");
    }
  };



  return (
    <>
      {timeLoading < 1 ? (
        <Loading timeLoading={timeLoading} setTimeLoading={setTimeLoading} />
      ) : (
        <AddTodoForm
          todos={todos}
          dispatch={dispatch}
          User={User}
          users={users}
          task={task}
          setTask={setTask}
          category={category}
          setCategory={setCategory}
          categoriesTodos={categoriesTodos}
          handleAddTodo={handleAddTodo}
        />
      )}
    </>
  );
}
