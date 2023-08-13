import React from "react";
import propTypes from "prop-types";

function FilterForm({
  searchGame,
  setSearchGame,
  genreFilterVal,
  platformFilterVal,
  setGenreFilterVal,
  setPlatformFilterVal
}) {
  
  return (
    <div className="filter-form">
      <form>
        <input
          type="text"
          placeholder="search a game"
          value={searchGame}
          onChange={(e) => {
            setSearchGame(e.target.value);
          }}
        />
        <select
          value={platformFilterVal}
          onChange={(e) => {
            setPlatformFilterVal(e.target.value);
          }}
        >
          <option value="select the platform">select the platform</option>
          <option value="pc">PC</option>
          <option value="ps4">PS4</option>
          <option value="xbox">XBOX</option>
          <option value="nintendo">Nintendo</option>
        </select>
        <select
          value={genreFilterVal}
          onChange={(e) => {
            setGenreFilterVal(e.target.value);
          }}
        >
          <option value="select the genre">select the genre</option>
          <option value="action">Action</option>
          <option value="adventure">Adventure</option>
          <option value="rpg">RPG</option>
          <option value="strategy">Strategy</option>
          <option value="sports">Sports</option>
          </select>

      </form>
    </div>
  );
}

FilterForm.propTypes = {
  genreFilterVal: propTypes.string.isRequired,
  platformFilterVal: propTypes.string.isRequired,
  setGenreFilterVal: propTypes.func.isRequired,
  setPlatformFilterVal: propTypes.func.isRequired,
  searchGame: propTypes.string.isRequired,
  setSearchGame: propTypes.func.isRequired,
};

export default FilterForm;
