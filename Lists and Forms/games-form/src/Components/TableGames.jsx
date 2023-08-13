import React from "react";
import PropTypes from "prop-types";
import TableItem from "./TableItem";

function TableGames({ games, editGenre, deleteGame }) {
  return (
    <div className="table-games">
      <table>
        <thead>
          <tr>
            <th>Game</th>
            <th>Genre</th>
            <th>Platform</th>
            <th>Actions</th>
          </tr>
        </thead>
        {games.length == 0 ? (
          <tbody>
            <tr>
              <td colSpan="4">No games found</td>
            </tr>
          </tbody>
        ) : (
          games.map((game) => (
            <TableItem
              key={game.id}
              id={game.id}
              game={game.game} 
              genre={game.genre}
              platform={game.platform}
              editGenre={editGenre}
              deleteGame={deleteGame}
            />
          ))
        )}
      </table>
    </div>
  );
}

TableGames.propTypes = {
  games: PropTypes.array.isRequired,
  editGenre: PropTypes.func.isRequired,
  deleteGame: PropTypes.func.isRequired,
};

export default TableGames;
