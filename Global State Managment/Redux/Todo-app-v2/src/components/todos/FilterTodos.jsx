import React from 'react'
import PropTypes from 'prop-types'

function FilterTodos({...props}) {
  return (
    <>
        <form
            onSubmit={(e) => {
                e.preventDefault();
                props.setSearch(e.target[0].value);
            }}
        >
            <input type="search" placeholder='search'/>
            <input type="submit" value="search" />
        </form>
        <select name="category"
            onChange={(e) => props.setCategory(e.target.value)}
        >
            <option value="All">All</option>
            {
                props.categories?.map((category, index) => (
                    <option key={index} value={category.value}>{category.name}</option>
                ))
            }
        </select>
        
    </>
  )
}

FilterTodos.propTypes = {
    categories: PropTypes.array.isRequired,
    setSearch: PropTypes.func.isRequired,
    setCategory: PropTypes.func.isRequired,
}

export default FilterTodos
