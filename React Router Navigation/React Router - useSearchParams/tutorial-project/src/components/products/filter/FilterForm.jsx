import React, { useEffect } from "react";
import FilterProduct from "./FilterProduct";
import PropTypes from "prop-types";


function FilterForm({...props}) {

  return (
    <>
      <FilterProduct
        search={props.search}
        setSearch={props.setSearch}
        category={props.category}
        setCategory={props.setCategory}
      />
    </>
  );
}


FilterForm.propTypes = {
  search: PropTypes.string.isRequired,
  setSearch: PropTypes.func.isRequired,
  category: PropTypes.string.isRequired,
  setCategory: PropTypes.func.isRequired
};

export default FilterForm;
