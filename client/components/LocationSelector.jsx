import React from 'react';

// simple rendering for Location
// add onCli event handler

class Location extends React.Component {
  render() {
    return <input type="text" value={this.state.location} placeholder="City"></input>
  }
}

}