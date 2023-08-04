
import PropTypes from 'prop-types'

function FilterMessage({messageFilter, infoFilter}) {
  return (
        <div className="filter-info">
            <h3>{messageFilter}</h3>
            <p>{infoFilter}</p>
        </div>
    )
}

FilterMessage.propTypes = {
    messageFilter: PropTypes.string.isRequired,
    infoFilter: PropTypes.string.isRequired
}

export default FilterMessage
