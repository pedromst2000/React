import React from 'react'
import PropTypes from 'prop-types'

function Welcome({message}) {
  return (
    <div className="message-welcome">
        <h1>{message}</h1>
    </div>
    )
}

Welcome.propTypes = {
    message: PropTypes.string.isRequired
}

export default Welcome
