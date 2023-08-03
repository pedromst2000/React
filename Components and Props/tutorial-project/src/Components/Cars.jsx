import PropTypes from 'prop-types'

function Cars({id, brand}) {
  return (
    <li key={id}>
        <h2>{brand}</h2>
    </li>
  )
}

Cars.propTypes = {
    id: PropTypes.number.isRequired,
    brand: PropTypes.string.isRequired,
}

export default Cars
