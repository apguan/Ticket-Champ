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
    // var formattedDate = moment(this.props.item.date).format('LLLL');

    var formattedDate = (moment(this.props.item.date).format('LLLL')).split(', 2017 ' || ', 2018 ' || ', 2019 ' || ', 2020 ');

    console.log('real date ---->', this.props.item.date);
    var weekDate = formattedDate[0];
    console.log('formattedDate 1', formattedDate[0]);
    var time = formattedDate[1];
    console.log('formattedDate 2 ', formattedDate[1]);

    var imgUrl = this.props.item.webId;

    var backgroundImg = {
      'backgroundImage': 'url('+ imgUrl +')',
      'color': 'white'
      // 'filter':'blur(6px)',
    }

    return (
      <div className="item col-md-4">
        <div className="card" onClick={this.onSearch} >
          <img className="trendingImg" width={'100%'} src={this.props.item.webId} />
          <div className="animated zoomIn cardContainer">
            <h4 className="group inner list-group-item-heading">{this.props.item.name}</h4>
            <h5 className="group inner list-group-item-text">{this.props.item.venueLocation}</h5>
            <p>{this.props.item.city}, {this.props.item.state}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default TrendingItem;

//             <p>{formattedDate}</p>
          // <img className="trendingImg" height={200} width={200} src={this.props.item.webId} />

          //width='100' height='100' style={backgroundImg}
