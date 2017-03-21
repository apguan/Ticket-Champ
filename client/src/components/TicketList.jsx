import React from 'react';
import TicketListItem from './TicketListItem.jsx';


function TicketList (props) {

  console.log('tickList', props.searchRes)

  props.searchRes.map(function(item) {
      console.log('city', item.city)
    })

  return (
    <li className="flex-item-ticketItem" >

      <div className="img-banner">
      </div>

      <h1>TicketList Component</h1>

      { props.searchRes.map(function(item) {
          return (
            <TicketListItem searchItem={item}/>
          )
        })
      }

    </li>


    // props.searchRes.map(function(item) {
    //   console.log('city', item.city)
    // })
  )
}

export default TicketList;


