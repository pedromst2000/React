import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import Movies from './pages/movies/Movies';
import Movie from './pages/movies/MovieDetail';
import Profile from './pages/Profile';
import Manage from './pages/Manage';
import NotFound from './pages/NotFound';
import Authenticate from './pages/Authenticate';
import Layout from './components/Layout';
import RequiresAuth from './components/RequiresAuth';
import IsLogged from './components/IsLogged';
import { AuthProvider } from './context/AuthProvider'
import { MoviesProvider } from './context/MoviesProvider';

function App() {

  return (
    <>
    <AuthProvider>
    <MoviesProvider>
    <Router>
    <Routes>
      <Route  element={<Layout />}>

        {/* public routes */}
        <Route path="/" index element={<Home />} /> 
        
        {/* the user cannot navigate to authenticate if is logged in */}
        <Route element={<IsLogged />}>
        <Route path="/authenticate" element={<Authenticate />} />
        </Route>

        <Route path="/movies">
          <Route index element={<Movies/>} />
          {/* private route */}
          <Route element={<RequiresAuth allowedRoles={["admin", "regular"]} />}>
          <Route path=":id" element={<Movie />} />
          </Route>
        </Route>


        <Route element={<RequiresAuth allowedRoles={["admin"]} />}>
        <Route path="/manage" element={<Manage />} />
        </Route>

        {/* private routes */}
        <Route element={<RequiresAuth allowedRoles={["admin", "regular","unsigned"]} />}>
        <Route path="/profile" element={<Profile />} />
        </Route>
       

      {/* catch invalid routes */}
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
    </Router>
    </MoviesProvider>
    </AuthProvider>
    </>
  )
}

export default App
