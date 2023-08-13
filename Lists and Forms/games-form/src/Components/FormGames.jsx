import React, { useState, useRef } from "react";
import propTypes from "prop-types";

function FormGames({ addGame, games }) {
  const [game, setGame] = useState("");
  const [genre, setGenre] = useState("");
  const [platform, setPlatform] = useState("");

  const inputGameRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    addGame({
      id: games.length + 1,
      game,
      genre,
      platform,
    });
    setGame("");
    setGenre("");
    setPlatform("");
    inputGameRef.current.focus();
  };

  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="title game"
          ref={inputGameRef}
          value={game}
          onChange={(e) => setGame(e.target.value)}
        />
        <select value={genre} onChange={(e) => setGenre(e.target.value)}>
          <option value="select the genre">select the genre</option>
          <option value="action">Action</option>
          <option value="adventure">Adventure</option>
          <option value="rpg">RPG</option>
          <option value="strategy">Strategy</option>
          <option value="sports">Sports</option>
        </select>
        <select value={platform} onChange={(e) => setPlatform(e.target.value)}>
          <option value="select the platform">select the platform</option>
          <option value="pc">PC</option>
          <option value="ps4">PS4</option>
          <option value="xbox">XBOX</option>
          <option value="nintendo">Nintendo</option>
        </select>
        <input type="submit" value="Add Game" />
      </form>
    </div>
  );
}

FormGames.propTypes = {
  addGame: propTypes.func.isRequired,
  games: propTypes.array.isRequired,
};

export default FormGames;
