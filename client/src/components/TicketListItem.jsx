import React from 'react';
var moment = require('moment');

function TicketListItem (props) {

  var read = moment(props.searchItem.date).format('LLLL')


  return (
          <tr className='tbl-row'>
            <td>{read}</td>
            <td>{props.searchItem.venueName}</td>
            <td>{props.searchItem.venueLocation}</td>
            <td>{props.searchItem.averagePrice}</td>
          </tr>
  )
}

export default TicketListItem;


