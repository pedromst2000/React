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
      (movie) => movie.Genre === genre
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

  const addMovie = (title, diretor, rate, year, genre, cover, stars, description) => {
    return new Promise((resolve, reject) => {

      const titleExists = movies.some(
        (movieItem) => movieItem.title === title
      );

      const coverExists = movies.some(
        (movieItem) => movieItem.Cover === cover
      );

      if (
        title === "" ||
        genre === "" ||
        genre === "Select a genre" ||
        cover === "" ||
        diretor === "" ||
        stars.length === 0 ||
        description === "" ||
        rate === 0
      ) {
        reject("Please fill all the fields");
      }

      else if (titleExists) {
        reject("Title already exists");
      }

     else if (coverExists) {
        reject("Cover already exists");
      }

      else{
        const newMovie = {
          id: movies.length + 1,
          title: title,
          Director: diretor,
          Stars: stars,
          Rate: rate,
          Year: year,
          Genre: genre,
          Cover: cover,
          Description: description,
        };
  
        setMovies([...movies, newMovie]);
  
        resolve("Movie added successfully");
  
      }
    });
  };

  return (
    <MoviesContext.Provider
      value={{
        movies,
        filterMoviesByTitle,
        filterMoviesByGenre,
        editGenrerMovie,
        deleteMovie,
        addMovie,
      }}
    >
      {children}
    </MoviesContext.Provider>
  );
}

export default MoviesContext;
