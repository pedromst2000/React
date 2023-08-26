import React,{ useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Movie from "./pages/Movie";
import Navbar from "./Components/Navbar";
import data from "./data/movies.json";

function App() {

  const [movies, setMovies] = useState(() => {
 
    const localData = localStorage.getItem("movies");

    return localData ? JSON.parse(localData) : data;
  });


  useEffect(() => {
    localStorage.setItem("movies", JSON.stringify(movies));
    
    setMovies(movies);
  
  }, [movies]);

  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home movies={movies} />} />
        <Route path="/movie/:id" element={<Movie movies={movies}/>}/>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
