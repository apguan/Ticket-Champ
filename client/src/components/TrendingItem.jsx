import React from 'react';
import moment from 'moment';

class TrendingItem extends React.Component {
  constructor(props) {
    super(props);

    this.onSearch = this.onSearch.bind(this);
  }

  onSearch() {
    this.props.search({"event": this.props.item.searchParam, "location": this.props.item.city });
    console.log('fired');
    this.props.changeClickState(true);
  }

  render() {
    var formattedDate = moment(this.props.item.date).format('LLLL');

    var imgUrl = this.props.item.webId;

    var backgroundImg = {
      'backgroundImage': 'url('+ imgUrl +')',
      'color': 'white'
      // 'filter':'blur(6px)',
    }

    console.log(this.props.item.venueLocation)
    return (
      <div className="item col-md-4">
        <div className="thumbnail" onClick={this.onSearch} >
          <div className="caption">
            <h3 className="group inner list-group-item-heading">{this.props.item.name}</h3>
            <h5 className="group inner list-group-item-text">{this.props.item.venueLocation + " - "}<span>{this.props.item.city}, {this.props.item.state}</span></h5>
          </div>
          <img className="trendingImg" height={200} width={200} src={this.props.item.webId} />
        </div>
      </div>
    )
  }
}

export default TrendingItem;

//             <p>{formattedDate}</p>
          // <img className="trendingImg" height={200} width={200} src={this.props.item.webId} />

          //width='100' height='100' style={backgroundImg}
