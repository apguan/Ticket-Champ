import React from 'react';
import Search from './SearchBar.jsx';
import Location from './LocationSelector.jsx';

function SearchUnit(props) {
  return (
    <div className="search-unit">
      <Search query={props.searchstate.search} searching={props.onSearch}/>
      <Location locale={props.searchstate.location}/>
    </div>
  ) 
}

export default SearchUnit;
