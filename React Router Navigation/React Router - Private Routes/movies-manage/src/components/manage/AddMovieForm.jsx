import React, { useEffect, useReducer, useRef, useState } from "react";
import PropTypes from "prop-types";
import StarsList from "./StarsList";
import CoverPreview from "./CoverPreview";
import { convertBase64 } from "../../utils/convertBase64";

function AddMovieForm({ ...props }) {
  const initialState = {
    title: "",
    diretor: "",
    rate: 0,
    year: 1900,
    genre: "",
    cover: "",
    stars: [],
    description: "",
  };

  const reducer = (state, action) => {
    // to clean the form
    if (action.type === "RESET") {
      return initialState;
    }

    // to update the form
    if (action.type === "UPDATE") {
      return {
        ...state,
        [action.field]:
          action.field === "stars"
            ? [
                ...state.stars,
                { id: state.stars.length + 1, name: action.payload },
              ]
            : action.payload,
      };
    }

    // delete star
    if (action.type === "DELETE_STAR") {
      return {
        ...state,
        stars: state.stars.filter((star) => star.id !== action.payload),
      };
    }

    // delete cover
    if (action.type === "DELETE_COVER") {
      return {
        ...state,
        cover: "",
      };
    }

    return state;
  };

  const [formAddMovie, dispatch] = useReducer(reducer, initialState);

  const [star, setStar] = useState("");
    const [message, setMessage] = useState("");

  const titleRef = useRef(null);
  const starRef = useRef(null);

  useEffect(() => {
    titleRef.current.focus();
  }, [titleRef]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { title, diretor, rate, year, genre, cover, stars, description } =
      formAddMovie;

      try{

        const response = await props.addMovie(
          formAddMovie.title,
          formAddMovie.diretor,
          formAddMovie.rate,
          formAddMovie.year,
          formAddMovie.genre,
          formAddMovie.cover,
          formAddMovie.stars,
          formAddMovie.description
        );

        setMessage(response);

        dispatch({
          type: "RESET",
        });
        
      }
      catch(error){
        setMessage(error)
      }
    
    
    };

  const addStar = (e) => {
    e.preventDefault();

    dispatch({
      type: "UPDATE",
      field: "stars",
      payload: star,
    });

    starRef.current.value = "";
    starRef.current.focus();
  };

  const handleconvertBase64 = async () => {
    const cover = await convertBase64(formAddMovie.cover);

    dispatch({
      type: "UPDATE",
      field: "cover",
      payload: cover,
    });
  };

  return (
    <form>
      <input
        ref={titleRef}
        value={formAddMovie.title}
        onChange={(e) => {
          dispatch({
            type: "UPDATE",
            field: "title",
            payload: e.target.value,
          });
        }}
        type="text"
        name="title"
        id="title"
        placeholder="title"
      />
      <input
        value={formAddMovie.diretor}
        onChange={(e) => {
          dispatch({
            type: "UPDATE",
            field: "diretor",
            payload: e.target.value,
          });
        }}
        type="text"
        name="diretor"
        id="diretor"
        placeholder="diretor"
      />
      <input
        value={formAddMovie.rate}
        onChange={(e) => {
          dispatch({
            type: "UPDATE",
            field: "rate",
            payload: parseFloat(e.target.value),
          });
        }}
        type="number"
        name="rate"
        id="rate"
        min="0"
        max="10"
        step="0.1"
        placeholder="rate"
      />
      <input
        value={formAddMovie.year}
        onChange={(e) => {
          dispatch({
            type: "UPDATE",
            field: "year",
            payload: parseInt(e.target.value),
          });
        }}
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
        value={formAddMovie.genre}
        onChange={(e) => {
          dispatch({
            type: "UPDATE",
            field: "genre",
            payload: e.target.value,
          });
        }}
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
      <div className="cover-preview">
        <h5>Add the cover of the movie</h5>
        <CoverPreview cover={formAddMovie.cover} />
      </div>
      <button
        className="add-cover-btn"
        onClick={(e) => {
          e.preventDefault();
          handleconvertBase64();
        }}
      >
        Add Cover
      </button>
      <button
        className="btn-delete-cover"
        onClick={(e) => {
          e.preventDefault();
          dispatch({
            type: "DELETE_COVER",
          });
        }}
      >
        Delete Cover
      </button>
      <h5>Add the stars of the movie</h5>
      <StarsList
        stars={formAddMovie.stars}
        deleteStar={(id) => {
          dispatch({
            type: "DELETE_STAR",
            payload: id,
          });
        }}
      />
      <br />
      <input
        value={formAddMovie.star}
        onChange={(e) => {
          setStar(e.target.value);
        }}
        ref={starRef}
        type="text"
        placeholder="star"
      />
      <button
        onClick={(e) => {
          addStar(e);
        }}
        className="btn-add-star"
      >
        +
      </button>
      <div className="description">
        <br />
        <textarea
          value={formAddMovie.description}
          onChange={(e) => {
            dispatch({
              type: "UPDATE",
              field: "description",
              payload: e.target.value,
            });
          }}
          name="description"
          id="description"
          cols="30"
          rows="10"
          placeholder="description"
        ></textarea>
      </div>
      <br />
      <p className={
        message === "Movie added successfully"
          ? "success-message"
          : "error-message"
      }>{message}</p>
      <button onClick={(e) => handleSubmit(e)} className="add-movie-btn">
        Add Movie
      </button>
    </form>
  );
}

AddMovieForm.propTypes = {
  movies: PropTypes.array.isRequired,
  addMovie: PropTypes.func.isRequired,
};

export default AddMovieForm;
