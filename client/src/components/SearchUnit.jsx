import React from 'react';
import Search from './SearchBar.jsx';
import Location from './LocationSelector.jsx';

function SearchUnit(props) {

  return (

    <ul className="flex-container">
      <li className="flex-item-gutter" ></li>
      <li className="flex-item-logo" >{<img src={'https://s3-us-west-1.amazonaws.com/zollstorage/ticket_champ_logo(4-)1).png'} className='img-responsive'/>}</li>
      <Search query={props.searchstate.search} searching={props.onSearch}/>
      <Location locale={props.searchstate.location}/>
      <li className="flex-item-gutter" ></li>
    </ul>

  ) 
}

export default SearchUnit;
