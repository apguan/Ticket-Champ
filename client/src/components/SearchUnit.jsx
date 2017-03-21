import React from 'react';
import Search from './SearchBar.jsx';

function SearchUnit(props) {

  return (

    <ul className="flex-container">
      <li className="flex-item-gutter-header" ></li>
      <li className="flex-item-logo" >{<img src={'https://s3-us-west-1.amazonaws.com/zollstorage/ticket_champ_logo(4-)1).png'} className='img-responsive'/>}</li>
      <Search searching={props.onSearch}/>
      <li className="flex-item-gutter-header" ></li>
    </ul>

  ) 
}

export default SearchUnit;
