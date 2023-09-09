import React from 'react'
import PropTypes from 'prop-types'
import StarsItem from './StarsItem'

function StarsList({...props}) {
  return (
    <div className="actors-list">
      <h5>Stars List</h5>
      <ul>
        {
          props.formAddMovie.stars.map(stars => (
            <StarsItem key={stars.id} stars={stars} />
          ))
        }
      </ul>
    </div>
  )
}

StarsList.propTypes = {
  formAddMovie: PropTypes.object.isRequired
}

export default StarsList
