import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function MovieItem({ id, cover, title, year, genrer }) {
  return (
    <>
      <div className="movie" key={id}>
        <div className="cover">
          <img src={cover} alt={title} />
        </div>
        <div className="title">
          <h4>{title}</h4>
        </div>
        <div className="year">
          <h4>{year}</h4>
        </div>
        <div className="genre">
          <h4>{genrer}</h4>
        </div>
        <div className="seeMore">
          <button>
            <Link to={`/movie/${id}`}>Ver Mais</Link>
          </button>
        </div>
      </div>
    </>
  );
}

MovieItem.propTypes = {
  id: PropTypes.number.isRequired,
  cover: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  genrer: PropTypes.string.isRequired,
};

export default MovieItem;
