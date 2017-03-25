import React from 'react';

class TrendingItem extends React.Component {
  constructor(props) {
    super(props);

    this.onSearch = this.onSearch.bind(this);
  }

  onSearch() {
    this.props.search({"event": this.props.item.name, "location": this.props.item.city });
    console.log('fired');
    this.props.changeClickState(true);
  }

  render() {
    console.log(this.props.item.venueLocation)
    return (
      <div className="item col-md-4">
        <div className="thumbnail" onClick={this.onSearch}>
          <img width={200} height={200} src={this.props.item.webId} />
          <div className="caption">
            <h4 className="group inner list-group-item-heading">{this.props.item.name}</h4>
            <p className="group inner list-group-item-text">{this.props.item.venueLocation}</p>
            <p>{this.props.item.city}, {this.props.item.state}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default TrendingItem;