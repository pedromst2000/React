import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import StarsList from "./StarsList";

function AddMovieForm({ ...props }) {
  const titleRef = useRef(null);

  useEffect(() => {
    titleRef.current.focus();
  }, [titleRef]);

  return (
    <form>
      <input
        ref={titleRef}
        type="text"
        name="title"
        id="title"
        placeholder="title"
      />
      <input
        type="text"
        name="diretor"
        id="diretor"
        placeholder="diretor"
      />
      <input
        type="number"
        name="rate"
        id="rate"
        min="0"
        max="10"
        step="0.1"
        placeholder="rate"
      />
      <input
        type="number"
        name="year"
        id="year"
        min="1900"
        max={
          new Date().getFullYear() // current year
        }
        step="1"
        placeholder="year"
      />
      <select
        name="genre"
        id="genre"
      >
        <option value="select the genrer">select the genrer</option>
        <option value="action">Action</option>
        <option value="comedy">Comedy</option>
        <option value="drama">Drama</option>
        <option value="fantasy">Fantasy</option>
        <option value="horror">Horror</option>
        <option value="romance">Romance</option>
        <option value="sci-fi">Sci-Fi</option>
        <option value="thriller">Thriller</option>
      </select>
      <button>Add Cover</button>
      <h5>Add the stars of the movie</h5>
      <input
        type="text"
        name="stars"
        id="stars"
        placeholder="actor"
      />
      <button>Add Star</button>
    </form>
  );
}

AddMovieForm.propTypes = {
  formAddMovie: PropTypes.object.isRequired,
  setFormAddMovie: PropTypes.func.isRequired,
};

export default AddMovieForm;
