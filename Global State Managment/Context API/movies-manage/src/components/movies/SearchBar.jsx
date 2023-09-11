import React from 'react'
import PropTypes from 'prop-types'

export default function SearchBar({searchVal, setSearchVal}) {
  
  return (
    <div className="search-bar">
        <input type="search" placeholder='search' 
        value={searchVal}
        onChange={(e)=> setSearchVal(e.target.value)}
        />
    </div>
    )
}


SearchBar.propTypes = {
  searchVal: PropTypes.string.isRequired,
  setSearchVal: PropTypes.func.isRequired
}