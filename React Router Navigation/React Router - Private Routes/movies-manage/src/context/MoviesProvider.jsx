import React, { createContext, useEffect, useState } from "react";
import moviesData from "../data/movies.json";

const MoviesContext = createContext({});

export function MoviesProvider({ children }) {
  const [movies, setMovies] = useState(() => {
    const storeMovies = localStorage.getItem("movies");

    return storeMovies ? JSON.parse(storeMovies) : moviesData;
  });

  useEffect(() => {
    setMovies(movies);

    localStorage.setItem("movies", JSON.stringify(movies));
  }, [movies]);

  const filterMoviesByTitle = (title) => {
    if (title === "") return movies;

    return movies.filter((movie) =>
      movie.title.toLowerCase().includes(title.toLowerCase())
    );
  };

  const filterMoviesByGenre = (genre) => {
    if (genre === "All") return movies;

    return movies.filter(
      (movie) => movie.Genre.toLowerCase() === genre.toLowerCase()
    );
  };

  const editGenrerMovie = (id, genrer) => {
    const newMovies = movies.map((movie) => {
      if (movie.id === id) {
        movie.Genre = genrer;

        return movie;
      }

      return movie;
    });

    setMovies(newMovies);
  };

  const deleteMovie = (id) => {
    // slice index
    const index = movies.findIndex((movie) => movie.id === id);

    // create new array
    const newMovies = [...movies];

    // remove element
    newMovies.splice(index, 1);

    // update state
    setMovies(newMovies);
  };

  return (
    <MoviesContext.Provider
      value={{ movies, filterMoviesByTitle, filterMoviesByGenre, editGenrerMovie, deleteMovie }}
    >
      {children}
    </MoviesContext.Provider>
  );
}

export default MoviesContext;
