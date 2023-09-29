import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import useMoviesProvider from "../../hooks/useMoviesProvider";
import useAuthProvider from "../../hooks/useAuthProvider";

export default function MovieDetail() {
  const { id } = useParams();
  const { movies, editGenrerMovie, deleteMovie } = useMoviesProvider();
  const { User } = useAuthProvider();

  const [movie, setMovie] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const foundMovie = movies.find((movie) => movie.id === parseInt(id));

    setMovie(foundMovie);
  }, [id, movie]);

  const handleEdit = () => {
    let confirmEdit = window.confirm(
      "Are you sure you want to edit this movie?"
    );

    if (confirmEdit) {
      let newGenre = prompt("Enter new genre");

      if (newGenre) {
        editGenrerMovie(movie.id, newGenre);
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
      deleteMovie(movie.id);
      alert("Movie deleted successfully");
      navigate("/movies");
    }
  };

  return (
    <div className="movie-detail-container">
      <div className="cover">
        <img src={movie.Cover} alt={movie.title} />
      </div>

      {User.role == "admin" ? (
        <div className="movie-actions">
          <button className="editbtn"
            onClick={() => {
              handleEdit();
            }}
          >Edit</button>
          <button className="deletebtn"
            onClick={()=>{
              handleDelete();
            }}
          >Delete</button>
          <button className="watchbtn">Watch Movie</button>
        </div>
      ) : User.role == "regular" ? (
        <div className="movie-actions">
          <button className="watchbtn">Watch Movie</button>
        </div>
      ) : null}

      <div className="title">
        <h3>{movie.title}</h3>
      </div>

      <div className="genre">
        <h3>{movie.Genre}</h3>
      </div>

      <div className="rate">
        <p>
          <span>
            {" "}
            <b>Rate:</b>
          </span>{" "}
          {movie.Rate}/10
        </p>
      </div>

      <div className="year">
        <p>
          <span>
            {" "}
            <b>Year:</b>
          </span>{" "}
          {movie.Year}
        </p>
      </div>

      <div className="diretor">
        <p>
          <span>
            {" "}
            <b>Director:</b>
          </span>{" "}
          {movie.Director}
        </p>
      </div>

      <div className="actors">
        <p>
          <span>
            {" "}
            <b>Actors:</b>
          </span>{" "}
          {"  "}
          {movie.Stars?.map((actor, index) => (
            <span key={index}>
              {actor.name}
              {index < movie.Stars.length - 1 ? ", " : ""}
            </span>
          ))}
        </p>
      </div>
      <div className="description">
        <p>
          <span>
            {" "}
            <b>Description:</b>
          </span>{" "}
          {movie.Description}
        </p>
      </div>
    </div>
  );
}
