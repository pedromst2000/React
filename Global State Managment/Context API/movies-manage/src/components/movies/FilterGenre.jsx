import React from 'react'
import PropTypes from 'prop-types'

export default function FilterGenre({genreVal, setGenreVal}) {
  return (
    <div className='filter-genre'>
            <select
                value={genreVal}
                onChange={(e)=> setGenreVal(e.target.value)}
            >
                <option value="all">All</option>
                <option value="action">Action</option>
                <option value="comedy">Comedy</option>
                <option value="drama">Drama</option>
                <option value="fantasy">Fantasy</option>
                <option value="horror">Horror</option>
                <option value="romance">Romance</option>
                <option value="sci-fi">Sci-Fi</option>
                <option value="thriller">Thriller</option>

            </select>
    </div>
  )
}


FilterGenre.propTypes = {
    genreVal: PropTypes.string.isRequired,
    setGenreVal: PropTypes.func.isRequired
}