import React from "react";
import PropTypes from "prop-types";

function FilterTodos({ ...props }) {
  return (
    <div className="filter-section">
      <div className="filter-section__search">
        <input
          type="text"
          placeholder="Search"
          onChange={(e) => props.setSearchTodo(e.target.value)}
        />
      </div>
      <div className="filter-section__category">
        <select
            onChange={(e) => props.setFilterCategory(e.target.value)}
        >
            <option value="all">All</option>
            <option value="chores">Chores</option>            
            <option value="work">Work</option>
            <option value="hobby">Hobby</option>
            <option value="health">Health</option>
        </select>
      </div>
    </div>
  );
}

FilterTodos.propTypes = {
    setSearchTodo: PropTypes.func.isRequired,
    setFilterCategory: PropTypes.func.isRequired,
};

export default FilterTodos;
