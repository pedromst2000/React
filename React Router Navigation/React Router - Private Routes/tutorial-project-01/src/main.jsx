import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./routes/Home.jsx";
import About from "./routes/About.jsx";
import AuthRoutes from "./auth/AuthRoutes.jsx";
import Private from "./routes/Private.jsx";
import Login from "./routes/Login.jsx";

const router = createBrowserRouter([

  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        index: true,
        element: <Home />
      },
      {
        path: "/about",
        element: <About />
      },
      {
        element: <AuthRoutes/>,
        // private Routes
        children: [
          {
            path: "/private",
            element: <Private />
          }
        ]
      },
      {
        path: "/login",
        element: <Login />
      }
    ]
  }
]);


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
