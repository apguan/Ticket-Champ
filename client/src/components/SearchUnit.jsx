import React from 'react';
import Search from './SearchBar.jsx';

class SearchUnit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      location: "San Francisco",
      search: "",
    }

    this.onChange = this.onChange.bind(this);
    this.handleLocation = this.handleLocation.bind(this);
    this.searchBar = this.searchBar.bind(this);
    this.switchView = this.switchView.bind(this);
  }


  switchView() {
    this.props.changePage();
    this.props.clickState(false);
  }

  onChange(event) {
    this.setState({
      search: event.target.value
    });
  }

  handleLocation(event) {
    this.setState({
      location: event.target.value
    })
  }

  searchBar() {
    var responseObj = {
      event: this.state.search,
      location: this.state.location
    }
    console.log("RESPONSE OBJ --> Trigger AJAX search fn: ", responseObj);
    // set State of clicked to true, pass this back up
    this.props.onSearch(responseObj);

    //THIS WAS HERE BEFORE
    // this.props.searching(responseObj);
    this.props.clickState(true);
  }

  render() {
    return (
      <ul className="flex-container">
        <li className="flex-item-gutter" ></li>
        <li className="flex-item-logo" onClick={this.switchView}>{<img src={'https://s3-us-west-1.amazonaws.com/zollstorage/ticket_champ_logo(4-)1).png'} className='ticket-pal-logo'/>}</li>
          <li className="flex-item-search" >
            <input className="search-input" value={this.state.search} onChange={this.onChange} placeholder={"Search for events, music, sports"} />
          </li>
           <li className="flex-item-location">
            <select  className="select-location" value={this.state.location} onChange={this.handleLocation}>
              <option value="Albuquerque">Albuquerque</option>
              <option value="Atlanta">Albuquerque</option>
              <option value="Austin">Austin</option>
              <option value="Baltimore">Baltimore</option>
              <option value="Boston">Boston</option>
              <option value="Charlotte">Charlotte</option>
              <option value="Chicago">Chicago</option>
              <option value="Columbus">Columbus</option>
              <option value="Dallas">Dallas</option>
              <option value="Denver">Denver</option>
              <option value="Detroit">Detroit</option>
              <option value="El Paso">El Paso</option>
              <option value="Fort Worth">Fort Worth</option>
              <option value="Green Bay">Green Bay</option>
              <option value="Houston">Houston</option>
              <option value="Indianapolis">Indianapolis</option>
              <option value="Jackson">Jackson</option>
              <option value="Jacksonville">Jacksonville</option>
              <option value="Las Vegas">Las Vegas</option>
              <option value="Los Angeles">Los Angeles</option>
              <option value="Louisville">Louisville</option>
              <option value="Miami">Miami</option>
              <option value="Milwaukee">Milwaukee</option>
              <option value="Memphis">Memphis</option>
              <option value="Nashville">Nashville</option>
              <option value="New Orleans">New Orleans</option>
              <option value="New York">New York</option>
              <option value="Oakland">Oakland</option>
              <option value="Oklahoma">Oklahoma</option>
              <option value="Philadelphia">Philadelphia</option>
              <option value="Phoenix">Phoenix</option>
              <option value="Portland">Portland</option>
              <option value="San Antonio">San Antonio</option>
              <option value="San Diego">San Diego</option>
              <option value="San Francisco">San Francisco</option>
              <option value="San Jose">San Jose</option>
              <option value="Seattle">Seattle</option>
              <option value="Washington, DC">Washington, DC</option>
            </select>
          </li>
          <li className="flex-item-gutter-header">
             <button className="search-button" onClick={this.searchBar}> Compare </button>
          </li>
        <li className="flex-item-gutter" ></li>
      </ul>
    ) 
  }
}

export default SearchUnit;
        // <Search searching={this.props.onSearch} changeClickState={this.props.clickState}/>
