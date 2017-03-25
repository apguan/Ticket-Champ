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

  var formattedDate = moment(this.props.searchItem.date).format('LLLL')
  console.log('formattedDate', formattedDate)
    return (
      <tr className='tbl-row' onClick={this.onSearch}>
        <td>{moment(this.props.searchItem.date).format('LLLL')}</td>
        <td>{this.props.searchItem.venueName}</td>
        <td>{this.props.searchItem.venueLocation}</td>
        <td>{this.props.searchItem.averagePrice}</td>
      </tr>
    )
  }
}

export default TicketListItem;


