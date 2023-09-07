import React from 'react'
import MovieItem from '../../components/MovieItem';
import SearchBar from '../../components/SearchBar';
import PropTypes from 'prop-types'

export default function Movies({moviesArray}) {
  

  return (
    <div className='movies-container'>
     
      <SearchBar />
      <div className="movies-list">
      {moviesArray.map(movie => <MovieItem key={movie.id} movie={movie} />)}
      </div>  
    </div>
  )
}

Movies.propTypes = {
  moviesArray : PropTypes.array.isRequired 
};
