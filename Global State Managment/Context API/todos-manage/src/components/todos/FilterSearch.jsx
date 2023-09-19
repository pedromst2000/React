import React from "react";
import PropTypes from "prop-types";

function FilterSearch({ ...props }) {
  return (
    <div className="filter-form">
      <div className="input-filter">
        <input
          className="filter-input"
          value={props.search}
          onChange={(e) => props.setSearch(e.target.value)}
          type="search"
          placeholder="search"
        />
      </div>
    </div>
  );
}

FilterSearch.propTypes = {
  setSearch: PropTypes.func.isRequired,
  search: PropTypes.string.isRequired,
};

export default FilterSearch;
