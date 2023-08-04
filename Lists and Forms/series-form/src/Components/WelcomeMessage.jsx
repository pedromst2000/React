import PropTypes from 'prop-types'

function WelcomeMessage({message, info}) {
  return (
    <div className='welcome-container'>
        <h1>{message}</h1>
        <p>{info}</p>
    </div>    

    )
}

WelcomeMessage.propTypes = {
    message: PropTypes.string.isRequired
}

export default WelcomeMessage
