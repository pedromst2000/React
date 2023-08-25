import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NotFound from "./routes/NotFound.jsx";
import Home from "./routes/Home.jsx";
import Movies from "./routes/movies/Movies.jsx";
import MovieDetail from "./routes/movies/MovieDetail.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "*",
        element: <NotFound />,
      },
      {
        path: "/",
        index: true,
        element: <Home />,
      },
      {
        path: "/movies",
        // nested routes
        children: [
          {
            // path: '/',
            index: true,
            element: <Movies />,
          },
          {
            // path: '/:id',
            path: ":id",
            element: <MovieDetail />,
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
