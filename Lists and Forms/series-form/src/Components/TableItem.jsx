import PropTypes from 'prop-types'

function TableItem({removeSerie, editSerie, series}) {
  return (
        <tr key={series.id}>
            <td>{series.title}</td>
            <td>{series.genre}</td>
            <td>
                <img src={series.cover} alt={series.title} />
            </td>
            <td>
                <button onClick={() => removeSerie(series.id)}>Delete</button>
                <button onClick={() => editSerie(series.id)}>Edit</button>
            </td>
        </tr>
    )
}

TableItem.propTypes = {
    removeSerie: PropTypes.func.isRequired,
    editSerie: PropTypes.func.isRequired,
    series: PropTypes.object.isRequired,
}

export default TableItem
