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
      <div>
        <h3> SEARCH EVENTS </h3>
        Search an artist <input value={this.state.value} onChange={this.onChange}/>
        <button onClick={this.searchBar}> Compare Tickets </button>
      </div>
    )
  }
}

export default Search;
