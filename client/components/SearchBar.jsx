import React from 'react';

class Search extends react.components {
  constructor(props) {
    super(props);
    this.state = {
      value = "lol try again"
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
    this.props.onSearch(this.state.value);
  }

  render() {
    return (
      <div>
        <input type="text" value={this.state.value} placeholder="search up an artist" onChange={this.onChange}></input>
        <button>Compare Tickets</button>
      </div>
    )
  }
}

export default Search
