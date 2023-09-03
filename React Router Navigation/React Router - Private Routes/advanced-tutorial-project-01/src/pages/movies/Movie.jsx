import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import useAuth from '../../hooks/useAuth';
import moviesData from '../../data/movies.json';


export default function Movie() {

const { User } = useAuth();
const { id } = useParams();
const navigate = useNavigate();

const [movie, setMovie] = useState({});

useEffect(() => {

    const movie = moviesData.find(movie => movie.id === Number(id));
    setMovie(movie);

    if (!movie) {
        navigate("/"); 
    }

    return () => {
        setMovie({});
    }



}, [User, movie]);


    return (
    <div>
        <h2>
            {movie.title}
        </h2>
        <div className="movie-cover">
            <img src={movie.Cover} alt={movie.title} />
            </div>
            <div className="director">
                <h4>Director: {movie.Director}</h4>
            </div>
            <div className="stars">
                <h4>Stars: {""}
                {movie.Stars && movie.Stars.map((star) => (
                    <span key={star.id}>{star.name}, </span>
                ))}
                </h4>
                <div className="rating">
                    <h4>Rating: {movie.Rate}</h4>
                </div>
                <div className="year">
                    <h4>Year: {movie.Year}</h4>
                </div>
                <div className="genre">
                    <h4>Genre: {movie.Genre}</h4>
                    </div>
                    <div className="description">
                        <p>{movie.Description}</p>
                        </div>
            </div>
            
    </div>
  )
}
