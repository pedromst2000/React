import PropTypes from "prop-types";

function FilterSeries({ searchVal, genrerVal, setSearchVal, setGenrerVal }) {
  return (
    <div className="filter-form">
      <form>
        <input
          type="search"
          name="search"
          placeholder="search serie"
          value={searchVal}
          onChange={(e) => 
            setSearchVal(e.target.value)
          }
        />
        <select
          name="genre"
          value={genrerVal}
          onChange={(e) => 
            setGenrerVal(e.target.value)
          }
        >
          <option value="all">all</option>
          <option value="action">action</option>
          <option value="comedy">comedy</option>
          <option value="drama">drama</option>
          <option value="horror">horror</option>
        </select>
      </form>
    </div>
  );
}

FilterSeries.propTypes = {
  setSearchVal: PropTypes.func.isRequired,
  searchVal: PropTypes.string.isRequired,
  genrerVal: PropTypes.string.isRequired,
  setGenrerVal: PropTypes.func.isRequired,
};

export default FilterSeries;
