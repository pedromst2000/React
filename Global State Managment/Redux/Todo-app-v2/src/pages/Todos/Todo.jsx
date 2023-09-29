import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useSelector } from "react-redux";
import NotFound from "../NotFound";

export default function Todo() {
  const { id } = useParams();
  const todos = useSelector((state) => state.todos.todos);
  const User = useSelector((state) => state.users.User);
  const users = useSelector((state) => state.users.users);
  const [todo, setTodo] = useState({});
  const [isMyTodo, setIsMyTodo] = useState(false);
  const [foundTodo, setFoundTodo] = useState(false);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    const findTodo = todos.find((todo) => todo.id == Number(id));

    if (findTodo) {
      setFoundTodo(true);
      setNotFound(false);
      setTodo({...findTodo})
    }
    
    else{
      setFoundTodo(false);
      setNotFound(true);
    }

  }, [id, todos, users]);

  
  return (
    <>
      {
        foundTodo == true && notFound == false ? 
        <h3>{todo.task}</h3> : foundTodo == false && notFound == true ?
       <NotFound/> : null
      }
    </>
  )


}
