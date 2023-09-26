import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Todos from "./pages/Todos/Todos";
import Todo from "./pages/Todos/Todo";
import AddTodo from "./pages/Todos/AddTodo";
import Manage from "./pages/Manage";
import Authentication from "./pages/Authentication";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";
import Layout from "./components/Layout";
import IsAuthenticated from "./components/IsAuthenticated";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />

            <Route path="/todos">
              <Route index element={<Todos />} />
              <Route path=":id" element={<Todo />} />

                {/* Protected route */}
                <Route element={<IsAuthenticated roles={["admin", "regular"]} />}>
              <Route path="add" element={<AddTodo />} />
              </Route>
            </Route>

      {/* Only admin can acess this route*/}
            <Route element={<IsAuthenticated roles={["admin"]} />}>    
            <Route path="/manage" element={<Manage />} />
            </Route>

            <Route path="/authentication" element={<Authentication />} />
            
            <Route element={<IsAuthenticated roles={["admin", "regular"]} />}>
            <Route path="/profile" element={<Profile />} />
            </Route>

            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
