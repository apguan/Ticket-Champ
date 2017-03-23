import React from 'react';

function TicketListItem (props) {

  console.log('tick list item props: ', props);
  //TO DO

  // RENDER EACH ITEM IN A TABLE
  return (
    <div>
        <div>
          <tr>
            <td>{props.searchItem.localDate}</td>
            <td>{props.searchItem.name}</td>
            <td>{props.searchItem.venueLocation}</td>
            <td>{props.searchItem.avg}</td>
          </tr>
        </div>
    </div>
  )
}

export default TicketListItem;


