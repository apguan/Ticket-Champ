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
      <div>
        <li className="flex-item-search" >
          <input className="search-input" value={this.state.search} onChange={this.onChange}/>
          <button className="search-button" onClick={this.searchBar}> Compare </button>
        </li>
         <li className="flex-item-location" >
          <select  className="select-location" value={this.state.location} onChange={this.handleLocation}>
            <option value="San Francisco">San Francisco</option>
            <option value="Los Angeles">Los Angeles</option>
            <option value="Chicago">Chicago</option>
            <option value="New York">New York</option>
          </select>
        </li>
      </div>
    )
  }
}

export default Search;
        // <h3> SEARCH EVENTS </h3>
