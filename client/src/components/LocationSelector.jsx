import React from 'react';


// simple rendering for Location
// dropdown menu

class Location extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      location: ''
    }
  }

  handleLocation(event) {
    this.setState({
      location: event.target.value
    })
  }

  render() {
    return (
      <span>Select Location</span>
      <select value={this.state.location} onChange={this.handleLocation.bind(this)}>
        <option value="1" active>San Francisco</option>
        <option value="2">Los Angeles</option>
        <option value="3">Chicago</option>
        <option value="4">New York</option>
      </select>
    );
  }
}

export default Location;