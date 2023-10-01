import React, { useEffect, useState } from "react";
import AddTodos from "../../components/todos/AddTodos";
import { useSelector, useDispatch } from "react-redux";
import { todosActions } from "../../store/TodosSlice";
import { useNavigate } from "react-router-dom";

export default function AddTodo() {
  const navigate = useNavigate();

  // states to manage
  const todos = useSelector((state) => state.todos.todos);
  const User = useSelector((state) => state.users.User);
  const users = useSelector((state) => state.users.users);
  const categories = useSelector((state) => state.categories.categories);
  const dispatch = useDispatch();
  // form fields
  const [task, setTask] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [loggedUserTodos, setLoggedUserTodos] = useState([]);

  useEffect(() => {
    const loggedUser = users.find((user) => user.username == User.username).id;

    const myTodos = todos.filter((tasks) => tasks.creatorID == loggedUser);

    setLoggedUserTodos(myTodos);
  }, [todos, User, users, categories]);

  const handleAddTodo = () => {
    if (task === "" || category === "" || description === "") {
      alert("Please fill all the fields");
    } else if (
      loggedUserTodos.some(
        (todo) => todo.task.toLowerCase() == task.toLowerCase()
      )
    ) {
      alert("This task already exists");
    } else {
      dispatch(
        todosActions.addTodo({
          task: task,
          categoryID: parseInt(category),
          description: description,
          creatorID: users.find((user) => user.username === User.username).id,
        })
      );

      alert("Task added successfully");

      navigate("/todos");
    }
  };

  return (
    <div>
      <AddTodos
        setTask={setTask}
        setCategory={setCategory}
        setDescription={setDescription}
        handleAddTodo={handleAddTodo}
        categories={categories}
      />
    </div>
  );
}
