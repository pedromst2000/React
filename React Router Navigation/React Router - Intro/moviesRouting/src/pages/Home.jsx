import React from "react";
import PropTypes from "prop-types";
import MovieItem from "../Components/MovieItem";

function Home({ movies }) {
  return (
    <>
    <div className="movies-container">
      {movies.map((movie) => (
        <MovieItem
          key={movie.id}
          id={movie.id}
          cover={movie.Cover}
          title={movie.title}
          year={movie.Year}
          genrer={movie.Genre}
          
        />
      ))}
    
    </div>
    </>
  );
}

Home.propTypes = {
  movies: PropTypes.array.isRequired,
};

export default Home;
