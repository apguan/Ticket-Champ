 import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      location: "San Francisco",
      search: ""
    }

    this.onChange = this.onChange.bind(this);
    this.handleLocation = this.handleLocation.bind(this);
    this.searchBar = this.searchBar.bind(this);
  }

  onChange(event) {
    console.log('ON CHANGE EVENT', event)
    console.log('ON CHANGE EVENT.TARGET', event.target)
    this.setState({
      search: event.target.value
    });
    console.log('UPDATE SEARCH STATE', this.state.search)
  }

  handleLocation(event) {
    this.setState({
      location: event.target.value
    })
    console.log('UPDATE SEARCH LOCATION', this.state.location)
  }

  searchBar() {
    var responseObj = {
      event: this.state.search,
      location: this.state.location
    }
    console.log("RESPONSE OBJ --> Trigger AJAX search fn: ", responseObj);
    this.props.searching(responseObj);
  }

  render() {
    return (
      <ul className="flex-container-search">
        <li className="flex-item-search" >
          <input className="search-input" value={this.state.search} onChange={this.onChange}/>
          <button className="search-button" onClick={this.searchBar}> Compare </button>
        </li>
        <li className="flex-item-gutter">
          <div> </div>
        </li>
         <li className="flex-item-location">
          <select  className="select-location" value={this.state.location} onChange={this.handleLocation}>
            <option value="Albuquerque">Albuquerque</option>
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
            <option value="Memphis">Memphis</option>
            <option value="Nashville">Nashville</option>
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
          </select>
        </li>
      </ul>
    )
  }
}

export default Search;
        // <h3> SEARCH EVENTS </h3>
