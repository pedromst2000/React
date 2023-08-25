import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider} from 'react-router-dom'
import NotFound from './routes/NotFound.jsx'
import Home from './routes/Home.jsx'
import About from './routes/About.jsx'  
import Movies from './routes/movies/Movies.jsx'
import MovieDetail from './routes/movies/MovieDetail.jsx'
import NewsLetter from './routes/NewsLetter.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        path: '/',
        index: true,
        element: <Home />
      },
      {
        path: '/about',
        element: <About />
      },
      {
        path: '/movies',
      // nested routes
        children: [
          {
            // path: '/',
            index: true,
            element: <Movies/>
          },
            {
              // path: '/:id, 
              path: ':id',
              element: <MovieDetail />
            }
        ]
      },
      {
        path: '/newsletter',
        element: <NewsLetter/> 
      }
    ]
  }



])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
