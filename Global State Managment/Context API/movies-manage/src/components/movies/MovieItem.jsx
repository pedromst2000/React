import React, { useState } from "react";
import PropTypes from "prop-types";
import useAuthProvider from "../../hooks/useAuthProvider";
import useMoviesProvider from "../../hooks/useMoviesProvider";
import { Link } from "react-router-dom";

function MovieItem({ ...props }) {
  const { User } = useAuthProvider();
  const { editGenrerMovie, deleteMovie } = useMoviesProvider();
  const handleEdit =  () => {
    let confirmEdit = window.confirm(
      "Are you sure you want to edit this movie?"
    );

    if (confirmEdit) {
        let newGenre = prompt("Enter new genre");
    
        if (newGenre) {
            editGenrerMovie(props.movie.id, newGenre);
            alert("Genre updated successfully");
        } else {
            alert("Genre cannot be empty");
        }
        }
};


const handleDelete = () => {

    let confirmDelete = window.confirm(
      "Are you sure you want to delete this movie?"
    );

    if (confirmDelete) {
        deleteMovie(props.movie.id);
        alert("Movie deleted successfully");
    }

};



  return (
    <div key={props.movie.id} className="movie-card">
      <div className="movie-card-img">
        <img src={props.movie.Cover} alt={props.movie.title} />
      </div>
      <div className="movie-title">
        <h4>
          {props.movie.title} ({props.movie.Year})
        </h4>
      </div>
      {User.role == "admin" ? (
        <div className="movie-actions">
          <button
            className="editbtn"
            onClick={() => {
              handleEdit();
            }}
          >
            Edit
          </button>
          <button className="deletebtn"
            onClick={() => {
                handleDelete();
            }}
          >Delete</button>
          <button>
            <Link to={`/movies/${props.movie.id}`}>See Details</Link>
          </button>
        </div>
      ) : User.role == "client" ? (
        <div className="movie-actions">
          <button>
            <Link to={`/movies/${props.movie.id}`}>See Details</Link>
          </button>
        </div>
      ) : null}
    </div>
  );
}

MovieItem.propTypes = {
  movie: PropTypes.object.isRequired,
};

export default MovieItem;
