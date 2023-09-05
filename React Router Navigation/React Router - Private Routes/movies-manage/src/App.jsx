import React from 'react'
import {Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Movies from './pages/Movies/Movies';
import Movie from './pages/Movies/MovieDetail';
import Profile from './pages/Profile';
import Manage from './pages/Manage';
import NotFound from './pages/NotFound';
import Authenticate from './pages/Authenticate';
import Layout from './components/Layout';
import RequiresAuth from './components/RequiresAuth';
import IsLogged from './components/IsLogged';

function App() {

  return (
    <>
    <Routes>
      <Route  element={<Layout />}>

        {/* public routes */}
        <Route path="/" index element={<Home />} /> 
        
        {/* the user cannot navigate to authenticate if is logged in */}
        <Route element={<IsLogged />}>
        <Route path="/authenticate" element={<Authenticate />} />
        </Route>

        <Route path="/movies">
          <Route index element={<Movies />} />
          {/* private route */}
          <Route element={<RequiresAuth allowedRoles={["admin", "client"]} />}>
          <Route path=":id" element={<Movie />} />
          </Route>
        </Route>

        {/* private routes */}
        <Route element={<RequiresAuth allowedRoles={["admin", "client","unsigned"]} />}>
        <Route path="/profile" element={<Profile />} />
        </Route>
        <Route element={<RequiresAuth allowedRoles={["admin"]} />}>
        <Route path="/manage" element={<Manage />} />
        </Route>

      {/* catch invalid routes */}
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
    </>
  )
}

export default App
