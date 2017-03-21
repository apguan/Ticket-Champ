import React from 'react';

function TicketListItem (props) {

  console.log('tick list item props: ', props);
  //TO DO

  // RENDER EACH ITEM IN A TABLE
  return (
    <div >
        <div className="well">
          <tr>
            <td>TicketMaster</td>
            <td>{props.searchItem.date}</td>
            <td>{props.searchItem.venueName}</td>
            <td>{props.searchItem.venueLocation}</td>
            <td>{props.searchItem.averagePrice}</td>
          </tr>
        </div>
    </div>
  )
}

export default TicketListItem;


