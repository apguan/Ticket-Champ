import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    }

    this.onChange = this.onChange.bind(this);
    this.search = this.search.bind(this);
  }

  onChange(e) {
    this.setState({
      value: e.target.value
    });
  }

  search(props) {
    console.log(this.props)
    this.props.onSearch(this.state.value);
  }

  render() {
    return (
      <li className="flex-item-search" >
        <input className="search-input" value={this.state.value} onChange={this.onChange}/>
        <button className="search-button" onClick={this.search}> Compare Tickets </button>
      </li>
    )
  }
}

export default Search;
        // <h3> SEARCH EVENTS </h3>
