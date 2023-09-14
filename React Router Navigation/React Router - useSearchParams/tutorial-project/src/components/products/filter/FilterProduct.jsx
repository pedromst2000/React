import React from "react";
import PropTypes from "prop-types";

function FilterProduct({ ...props }) {
  return (
    <>
      <input
        onChange={(e) => 
          props.setSearch(e.target.value)
        }
        type="search"
        name="search"
        placeholder="search"
      />
      &nbsp; &nbsp;
      <select
        onChange={(e) => props.setCategory(e.target.value)
        }
        name="category"
      >
        <option value="all">Filter category</option>
        <option value="all">All</option>
        <option value="Electronics">Electronics</option>
        <option value="Accessories">Accessories</option>
        <option value="Fitness">Fitness</option>
        <option value="Appliances">Appliances</option>
        <option value="Footwear">Footwear</option>
        <option value="Clothing">Clothing</option>
        <option value="Furniture">Furniture</option>
        <option value="Books">Books</option>
        <option value="Toys">Toys</option>
        <option value="Food">Food</option>
      </select>
    </>
  );
}

FilterProduct.propTypes = {
  search: PropTypes.string.isRequired,
  setSearch: PropTypes.func.isRequired,
  category: PropTypes.string.isRequired,
  setCategory: PropTypes.func.isRequired,
};

export default FilterProduct;
