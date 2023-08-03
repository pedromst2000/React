import PropTypes from 'prop-types'

function ListData({countriesArray}) {

    const countries = countriesArray.map((country) => {

        return (
            <li key={country.id}>
                {country.country} - {country.capital}
            </li>
        )

    })



  return (
    <ul>
        {countries}
    </ul>
    
    )
}

ListData.propTypes = {
    countriesArray: PropTypes.array.isRequired,
}

export default ListData
