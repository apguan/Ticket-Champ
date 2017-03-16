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
      <div>
        <h3> SEARCH EVENTS </h3>
        Search an artist <input value={this.state.value} onChange={this.onChange}/>
        <button onClick={this.search}> Compare Tickets </button>
      </div>
    )
  }
}

export default Search;
