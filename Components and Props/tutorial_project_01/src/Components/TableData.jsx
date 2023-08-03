import PropTypes from 'prop-types'

function TableData({countriesArray}) {
  return (
    <table>
        <thead>
            <tr>
                <th>Country</th>
                <th>Capital</th>
            </tr>
        </thead>
        <tbody>
            {
                countriesArray.map((country) => {
                    return (
                        <tr key={country.id}>
                            <td>{country.country}</td>
                            <td>{country.capital}</td>
                        </tr>
                    )
                } )
            }
            </tbody>
    </table>
    )
}

TableData.propTypes = {
    countriesArray: PropTypes.array.isRequired,
}

export default TableData
