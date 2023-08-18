import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";

function Movie({ movies }) {
  const { id } = useParams();

  const [data, setData] = useState(() => {
    const movie = movies.find((movie) => movie.id === Number(id));
    return movie;
  });

  useEffect(() => {
    const movie = movies.find((movie) => movie.id === Number(id));
    setData(movie);

    
    
    // cleanup function
    return () => {
      setData({});
    };
  }, [id, movies]);

  return (
    <>
      <div className="movie-container">
        <div className="movie-cover">
          <img src={data.Cover} alt={data.title} />
        </div>
        <div className="movie-info">
          <div className="movie-title">
            <h2>{data.title}</h2>
          </div>
          <div className="director">
            <h3>Diretor : {data.Director}</h3>
          </div>
          <div className="Stars">
            <h4>
                Elenco :{" "}
                {data.Stars.map((star) => (
                <span key={star.id}>{star.name} </span>
                ))}
            </h4>
          </div>
          <div className="rate">
            <h4>Nota : {data.Rate}</h4>
          </div>
            <div className="year">
            <h4>Ano : {data.Year}</h4>
            </div>
            <div className="genre">
            <h4>Gênero : {data.Genre}</h4>
                </div>
                <div className="description">
                    <p>
                        {data.Description}
                    </p>
                </div>
        </div>
      </div>
    </>
  );
}

Movie.propTypes = {
  movies: PropTypes.array.isRequired,
};

export default Movie;
