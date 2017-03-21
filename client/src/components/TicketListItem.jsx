import React from 'react';

function TicketListItem (props) {

  console.log('tick list item props: ', props);
  //TO DO

  // RENDER EACH ITEM IN A TABLE
  return (
    <div >
        <div className="well">
          <h3>{props.searchItem.venueName}</h3>
        </div>
    </div>
  )
}

export default TicketListItem;


