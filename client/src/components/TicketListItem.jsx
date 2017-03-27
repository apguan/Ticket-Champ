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
  var parseWeekDate = formattedDate[0].split(', ');
  var weekDate = parseWeekDate[1].split(',');
  console.log('formattedDate 1', formattedDate[0]);
  var parseTime = formattedDate[1].split(':');
  var time = parseTime[0] + 'PM';
  console.log('formattedDate 2 ', formattedDate[1]);
  var url = this.props.searchItem.eventUrl;

    return (
      <tr className='tbl-row'>
        <td>
          <div className='dateStyle'>
            <div className='dateStyle-date'>
              {weekDate}
            </div>
            <div className='dateStyle-time'>
              ⏰  {time}
            </div>
          </div>
        </td>
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


//Add into className tbl-row to hook up list item click functionality
//...removed now for stability
//onClick={this.onSearch}