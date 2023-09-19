import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useTodosProvider from "../../hooks/useTodosProvider";
import useAuthProvider from "../../hooks/useAuthProvider";
import Loading  from "../../components/Loading";
import NotFound from "../NotFound";

function Todo() {
  const { id } = useParams();

  const { todos, categoriesTodos } = useTodosProvider();
  const { User, users } = useAuthProvider();
  const [category, setCategory] = useState("");
  const [creator, setCreator] = useState("");
  const [timeLoading, setTimeLoading] = useState(0);
  const [todo, setTodo] = useState({});
  const [foundTodo, setFoundTodo] = useState(false);

  useEffect(() => {
    const todo = todos.find((todo) => todo.id == id);

    if(!todo){
      setFoundTodo(false);
    }

    else{
      setFoundTodo(true);
      setTodo({
        ...todo,
      });
  
      const category = categoriesTodos.find(
        (category) => category.id == todo.categoryID
      );
  
      const creator = users.find((user) => user.id == todo.creatorID);
  
      setCreator(creator.username);
  
        setCategory(category.category);

    }

  }, [todos, category, creator, foundTodo, id]);



  // const handleViewTodo = (id) => {


  // };



  return (
    <>
     {
      timeLoading < 2 ? 
      <Loading timeLoading={timeLoading} setTimeLoading={setTimeLoading} /> :
      !foundTodo ? <NotFound /> :
      <div className="todo-container">
      <h3>{todo.task}</h3>
      <span>
        category:
        <b>{category}</b>
      </span>
      <span>
        status:
        <b>{todo.completed ? "Completed" : "Pending"}</b>
      </span>
      {creator == User.username ? null : (
        <span>
          Creator:
          <b>{creator}</b>
        </span>
      )}

    </div>
     }
    </>
  );
}

export default Todo;
