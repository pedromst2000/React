import React, { useEffect, useState } from "react";
import MoviesData from "../../data/movies.json";
import MovieItem from "../../components/MovieItem";

export default function Movies() {
  const [movies, setMovies] = useState(() => {
    const storageMovies = localStorage.getItem("movies");

    return storageMovies ? JSON.parse(storageMovies) : MoviesData;
  });

  useEffect(() => {

    setMovies(MoviesData);

    return localStorage.setItem("movies", JSON.stringify(movies));

  }, [movies]);

  return (
    <div>
      <div className="movies">
        {movies.map((movie) => (
          <MovieItem key={movie.id} 
            movie={movie}
          />
        ))}     
      </div>

    </div>
  );
}
