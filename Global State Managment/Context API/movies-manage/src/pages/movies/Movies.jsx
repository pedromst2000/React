import React, { useEffect, useState } from "react";
import MovieItem from "../../components/movies/MovieItem";
import SearchBar from "../../components/movies/SearchBar";
import useMoviesProvider from "../../hooks/useMoviesProvider";
import FilterGenre from "../../components/movies/FilterGenre";

export default function Movies() {
  const { filterMoviesByTitle, filterMoviesByGenre } = useMoviesProvider();

  const [searchVal, setSearchVal] = useState("");
  const [genreVal, setGenreVal] = useState("all");

  const [isFilterGenre, setIsFilterGenre] = useState(false);
  const [isFilterTitle, setIsFilterTitle] = useState(false);

  const filteredMovies = filterMoviesByTitle(searchVal);
  const filteredMoviesByGenre = filterMoviesByGenre(genreVal);

  useEffect(() => {
    if (searchVal === "") setIsFilterTitle(false);
    else setIsFilterTitle(true);

    if (genreVal === "all") setIsFilterGenre(false);
    else setIsFilterGenre(true);
  }, [searchVal, genreVal]);

  return (
    <div className="movies-container">
      <SearchBar searchVal={searchVal} setSearchVal={setSearchVal} />
      <FilterGenre genreVal={genreVal} setGenreVal={setGenreVal} />
      <div className="movies-list">
        {isFilterTitle ? (
          filteredMovies.length > 0 ? (
            filteredMovies.map((movie) => (
              <MovieItem key={movie.id} movie={movie} />
            ))
          ) : (
            <h3>No movies found</h3>
          )
        ) : isFilterGenre ? (
          filteredMoviesByGenre.length > 0 ? (
            filteredMoviesByGenre.map((movie) => (
              <MovieItem key={movie.id} movie={movie} />
            ))
          ) : (
            <h3>No movies found</h3>
          )
        ) : (
          filteredMovies.map((movie) => (
            <MovieItem key={movie.id} movie={movie} />
          ))
        )}
      </div>
    </div>
  );
}
