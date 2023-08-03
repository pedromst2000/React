import PropTypes from 'prop-types'

function MessageForm({message}) {
  return (
    <div className='title-form'>
      <h1>{message}</h1>
    </div>
  );
}

MessageForm.propTypes = {
  message: PropTypes.string.isRequired
}

export default MessageForm
