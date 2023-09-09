import React from 'react'
import PropTypes from 'prop-types'

function StarsItem({...props}) {
  return (
    <li key={props.stars.id}>
        {props.stars.name}
    </li>
    )
}

StarsItem.propTypes = {
  stars: PropTypes.object.isRequired
}

export default StarsItem
