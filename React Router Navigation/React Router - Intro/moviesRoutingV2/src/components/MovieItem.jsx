import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function MovieItem({ id, title, Cover, year, genre }) {
  return (
    <div key={id} className="movie">
      <div className="movie-cover">
        <img src={Cover} alt={title} />
      </div>
      <div className="movie-title">
        <h4>{title}</h4>
      </div>
      <div className="movie-year">
        <h4>{year}</h4>
      </div>
      <div className="movie-genre">
        <h4>{genre}</h4>
      </div>
      <div className="seeDetail">
        <button>
            <Link to={`/movies/${id}`}>See Detail</Link>
        </button>
      </div>
    </div>
  );
}

MovieItem.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    Cover: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
};

export default MovieItem;
