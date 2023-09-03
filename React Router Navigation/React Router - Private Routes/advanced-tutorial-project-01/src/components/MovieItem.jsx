import React from 'react'
import Proptypes from 'prop-types'
import { useNavigate, Link } from 'react-router-dom'
import useAuth from '../hooks/useAuth'

export default function MovieItem({...props}) {
  
  const { User } = useAuth();
  const navigate = useNavigate();

    return (
    <div key={props.movie.id} className="movie-card">
        <div className="movie-cover">
        <img src={props.movie.Cover} alt={props.movie.title} />
        </div>
        <div className="movie-title">
        <h4>{props.movie.title} ({props.movie.Year})
        </h4>
        {
            User.isLogged && User.role === "admin" ? (
                <div className="movie-actions">
                    <button>
                        Edit
                    </button>
                        <button>
                            Delete
                        </button>
                        <button
                            onClick={() => navigate(`/movies/${props.movie.id}`)} // navigate to the movie details page
                        >
                            See Details
                        </button>
                
                </div>
            ) : (
                <div className="movie-actions">
                    <button
                    >
                        <Link
                            to={`/movies/${props.movie.id}`} // navigate to the movie details page
                        >
                            See Details
                            </Link>
                    </button>
            
            </div>
            )
        }
        </div>
    </div>
    )
}


MovieItem.propTypes = {
    movie: Proptypes.shape({
        id: Proptypes.number.isRequired,
        Cover: Proptypes.string.isRequired,
        title: Proptypes.string.isRequired,
        Year: Proptypes.number.isRequired,
    })
}