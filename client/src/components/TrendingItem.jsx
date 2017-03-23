import React from 'react';

class TrendingItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props.item.venueLocation)
    return (
      <div className="col-md-4">
        <h2>{this.props.item.name}</h2>
        <img className="img-trending"src={this.props.item.webId} />
        <p>{this.props.item.venueLocation}</p>
        <p>{this.props.item.city}, {this.props.item.state}</p>
      </div>
    )
  }


}

export default TrendingItem;