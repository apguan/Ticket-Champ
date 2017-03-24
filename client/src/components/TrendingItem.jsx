import React from 'react';

class TrendingItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props.item.venueLocation)
    return (
      <div className="col-md-4">
        <h3>{this.props.item.name}</h3>
        <div className="col-md-4">
        <img className="img-responsive" height="300" src={this.props.item.webId} />
        </div>
        <p>{this.props.item.venueLocation}</p>
        <p>{this.props.item.city}, {this.props.item.state}</p>
      </div>
    )
  }


}

export default TrendingItem;