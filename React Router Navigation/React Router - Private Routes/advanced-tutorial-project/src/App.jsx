import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Login from "./pages/Login";
import Home from "./pages/Home";
import About from "./pages/About";
import Admin from "./pages/Admin";
import Premium from "./pages/Premium";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";
import RequiresAuth from "./components/RequiresAuth";
import IsLogged from "./components/IsLogged";

function App() {
  return (
    <>
    {/* Routhes pattern of the application */}
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* public routes */}
          <Route path="/" index element={<Home />} />
          <Route path="about" element={<About />} />
        
          {/*  if the user is logged in redirect to profile page */}
          <Route element={<IsLogged />}> 
          <Route path="login" element={<Login />} />
          </Route>

          {/* Private Routes - protected Routes */}
          <Route element={<RequiresAuth allowed={["admin"]} />}>
            <Route path="admin" element={<Admin />} />
          </Route>

          <Route element={<RequiresAuth allowed={["regular", "admin"]} />}>
            <Route path="premium" element={<Premium />} />
          </Route>

          <Route element={<RequiresAuth allowed={["regular", "admin"]} />}>
            <Route path="profile" element={<Profile />} />
          </Route>

        {/* catch invalid routes */}
          <Route path="*" element={<NotFound/>} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
