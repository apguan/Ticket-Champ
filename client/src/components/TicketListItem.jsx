import React from 'react';
import moment from 'moment';


class TicketListItem extends React.Component {
  constructor(props) {
    super(props)

    this.onSearch = this.onSearch.bind(this);
  }

  onSearch() {
    this.props.search({"event": this.props.searchItem.SearchParam, "location": this.props.searchItem.location });
  }


  render () {

  var formattedDate = (moment(this.props.searchItem.date).format('LLLL')).split(', 2017 ' || ', 2018 ' || ', 2019 ' || ', 2020 ');


  console.log('formattedDate 1+2', formattedDate);
  var weekDate = formattedDate[0];
  console.log('formattedDate 1', formattedDate[0]);
  var time = formattedDate[1];
  console.log('formattedDate 2 ', formattedDate[1]);
  var url = this.props.searchItem.eventUrl;

    return (
      <tr className='tbl-row' onClick={this.onSearch}>
        <td>{weekDate} <span>{time}</span> </td>
        <td>{this.props.searchItem.venueName}</td>
        <td>{this.props.searchItem.venueLocation}</td>
        {this.props.searchItem.averagePrice === null ?
          (<td><button onClick={
                function() {
                  window.open(url)}
                } className='btn btn-default'
            >Check Price</button></td>) :
          (<td>${Math.round(this.props.searchItem.averagePrice)}</td>)
        }
      </tr>
    )
  }
}

export default TicketListItem;


