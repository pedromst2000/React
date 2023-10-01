import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useSelector } from "react-redux";
import NotFound from "../NotFound";

export default function Todo() {
  const { id } = useParams();
  const todos = useSelector((state) => state.todos.todos);
  const User = useSelector((state) => state.users.User);
  const users = useSelector((state) => state.users.users);
  const categories = useSelector((state) => state.categories.categories);
  const [todo, setTodo] = useState({});
  const [isMyTodo, setIsMyTodo] = useState(false);
  const [isNotMyTodo, setIsNotMyTodo] = useState(false);
  const [foundTodo, setFoundTodo] = useState(false);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    const findTodo = todos.find((todo) => todo.id == Number(id));

    const loggedUser = users.find((user) => user.username == User.username).id;

    if (findTodo && findTodo.creatorID == loggedUser) {
      setFoundTodo(true);
      setNotFound(false);
      setIsMyTodo(true);
      setIsNotMyTodo(false);
      setTodo({...findTodo})
    }
    
    else{
      setFoundTodo(false);
      setNotFound(true);
      setIsMyTodo(false);
      setIsNotMyTodo(true);
    }

  }, [id, todos, users]);



    if(foundTodo == true && notFound == false || isMyTodo == true && isNotMyTodo == false){
      return (
        <>
          <div className="todo-container">
            <div className="title">
              <h2>{todo.task}</h2>
            </div>
            <div className="category">
              <p>{
                  categories.find((category) => category.id == todo.categoryID).name  
                }
                </p>
            </div>
            <div className="status">
                <span>{
                    todo.completed == true ? "Completed" : "Not Completed"
                  }</span>
            </div>
            <div className="description">
              <p>
                {todo.description}
              </p>
            </div>
          </div>
        </>
      )
    }

    else if(foundTodo == true && notFound == false || isMyTodo == false && isNotMyTodo == true){
          return (
            <>
              <NotFound />
            </>
          )
    }


}
