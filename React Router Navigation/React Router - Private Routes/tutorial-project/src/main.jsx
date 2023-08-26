import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./routes/Home.jsx";
import About from "./routes/About.jsx";
import Premium from "./routes/Premium.jsx";
import Login from "./routes/Login.jsx";
import AuthRoutes from "./utils/AuthRoutes.jsx"
import Forum from "./routes/Forum.jsx";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        index: true,
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      // nesting all the private routes or wrapping them in a parent route AuthRoutes
      {
        element: <AuthRoutes/>,
        children: [
          {
            path: "/premium",
            element: <Premium />,
          },
          {
            path: "/forum",
            element: <Forum />,
          }
        ]
      },
      {
        path: "/login",
        element: <Login />
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
