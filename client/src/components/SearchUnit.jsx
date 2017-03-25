import React from 'react';
import Search from './SearchBar.jsx';

class SearchUnit extends React.Component {
  constructor(props) {
    super(props);
    this.switchView = this.switchView.bind(this);
  }
  //

  switchView() {
    this.props.changePage();
  }

  render() {
    return (
      <ul className="flex-container">
        <li className="flex-item-gutter-header" ></li>
        <li className="flex-item-logo" onClick={this.switchView}>{<img src={'https://s3-us-west-1.amazonaws.com/zollstorage/ticket_champ_logo(4-)1).png'} className='ticket-pal-logo'/>}</li>
        <Search searching={this.props.onSearch} changeClickState={this.props.clickstate}/>
        <li className="flex-item-gutter-header" ></li>
      </ul>

    ) 
  }
}

export default SearchUnit;
