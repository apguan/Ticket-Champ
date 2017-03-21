 import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    }

    this.onChange = this.onChange.bind(this);
    this.searchBar = this.searchBar.bind(this);
  }

  onChange(event) {
    this.setState({
      value: event.target.value
    });
  }

  searchBar() {
    console.log(this.state.value);
    this.props.searching(this.state.value);
  }

  render() {
    return (
      <li className="flex-item-search" >
        <input className="search-input" value={this.state.value} onChange={this.onChange}/>
        <button className="search-button" onClick={this.searchBar}> Compare </button>
      </li>
    )
  }
}

export default Search;
        // <h3> SEARCH EVENTS </h3>
