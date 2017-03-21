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
      <table>
      <div className="well">
        <tr>
          <th> Provider </th>
          <th> Date </th>
          <th> Event </th>
          <th> Location </th>
          <th> Price </th>
        </tr>
      </div>
      { props.searchRes.map(function(item) {
          return (
            <TicketListItem searchItem={item}/>
          )
        })
      }
      </table>
    </li>


    // props.searchRes.map(function(item) {
    //   console.log('city', item.city)
    // })
  )
}

export default TicketList;


