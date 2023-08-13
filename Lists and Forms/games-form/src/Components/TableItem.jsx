import React from 'react'
import PropTypes from 'prop-types'

function TableItem({id, game,  genre, platform, editGenre, deleteGame}) {
  return (
    <tbody>
        <tr key={id}>
            <td>{game}</td>
            <td>{genre}</td>
            <td>{platform}</td>
            <td>
                <button onClick={() => editGenre(id)}>Edit Genrer</button>
                <button onClick={() => deleteGame(id)}>Delete</button>
            </td>
        </tr>
    </tbody>
    )
}

TableItem.propTypes = {
    editGenre: PropTypes.func.isRequired,
    deleteGame: PropTypes.func.isRequired,
    id: PropTypes.number.isRequired,
    game: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    platform: PropTypes.string.isRequired
}

export default TableItem
