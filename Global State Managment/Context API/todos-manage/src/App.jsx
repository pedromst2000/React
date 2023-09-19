import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import IsLogged from "./components/IsLogged";
import Home from "./pages/Home";
import Login from "./pages/login";
import Todos from "./pages/todos/Todos";
import Todo from "./pages/todos/Todo";
import AddTodo from "./pages/todos/AddTodo";
import NotFound from "./pages/NotFound";
import { AuthProvider } from "./context/AuthProvider";
import { TodosProvider } from "./context/TodosProvider";

function App() {
  return (
    <>
      <AuthProvider>
          <TodosProvider>
        <Router>
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Home />} />
              {/* nested route Todos protected */}
              <Route  element={<IsLogged />}>
              <Route path="/todos">
                <Route  index element={<Todos />} />
                <Route path=":id" element={<Todo />} />
                <Route path="add" element={<AddTodo />} />
              </Route>
              </Route>
              <Route path="/login" element={<Login />} />

              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </Router>
        </TodosProvider>
      </AuthProvider>
    </>
  );
}

export default App;
