import PropTypes from 'prop-types'

function TableSeries({removeSerie, editSerie, series}) {



    return (
    <div className="table-series">
        <table>
            <thead>
                <tr>
                    <th>title</th>
                    <th>genre</th>
                    <th>cover</th>
                    <th>Options</th>
                </tr>
            </thead>
            <tbody>
                {
                    // if returns an empty array
                series.length === 0 ? (
                    <tr>
                        <td colSpan="4">No series found</td>
                    </tr>
                ) : (
                    // if returns an array with data
                    series.map((serie) => (
                        <tr key={serie.id}>
                            <td>{serie.title}</td>
                            <td>{serie.genre}</td>
                            <td><img src={serie.cover} alt={serie.title} /></td>
                            <td>
                                <button onClick={() => removeSerie(serie.id)}>Remove</button>
                                <button onClick={() => editSerie(serie.id)}>Edit</button>
                            </td>
                        </tr>
                    ))
                )
                }
                </tbody>
        </table>
    </div>
    )
}

TableSeries.propTypes = {
    removeSerie: PropTypes.func.isRequired,
    editSerie: PropTypes.func.isRequired,
    series: PropTypes.array.isRequired,
}

export default TableSeries
