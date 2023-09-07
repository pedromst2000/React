import React from 'react'
import PropTypes from 'prop-types'
import useAuth from '../hooks/useAuthProvider'
import { Link } from 'react-router-dom';

function MovieItem({...props}) {
  
    const {User} = useAuth();
  
    return (
    <div key={props.movie.id} className="movie-card">
        <div className="movie-card-img">
            <img src={props.movie.Cover} alt={props.movie.title} />
            </div>
            <div className="movie-title">
                <h4>{props.movie.title} ({props.movie.Year})</h4>
            </div>
            {
                User.role == "admin" ? 
                <div className="movie-actions">
                    <button>Edit</button>
                    <button>Delete</button>
                    <button>
                        <Link to={`/movies/${props.movie.id}`}>See Details</Link>
                    </button>
                </div> : User.role == "client" ? 
                <div className="movie-actions">
                      <button>
                        <Link to={`/movies/${props.movie.id}`}>See Details</Link>
                    </button>
                    </div> : null
            }
    </div>
    )
}

MovieItem.propTypes = {
    movie: PropTypes.object.isRequired
}

export default MovieItem
