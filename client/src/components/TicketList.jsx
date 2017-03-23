import React from 'react';
import TicketListItem from './TicketListItem.jsx';


function TicketList (props) {

  console.log('tickList', props.searchRes)

  props.searchRes.map(function(item) {
      console.log('city', item.city)
    })

  var imgUrl = props.searchRes[0].url;

  console.log('IMG URL', imgUrl);

  var imgBannerUpdate = {
    'backgroundImage': 'url('+ imgUrl +')'
  }

  var imgCard = {
    'width':'100%'
  }
  var responsive = {
    'overflow-x':'auto'
  }

  var upcomingEvents = props.searchRes.splice(1);
  console.log("upcomingEvents minus aly", upcomingEvents)

  return (
    <div>
      <div className="img-banner" style={imgBannerUpdate}></div>
      <h1>TicketList Component</h1>

      <ul className="flex-container">
        <li className="flex-item-gutter" ></li>
        <li className="flex-item-ticketItem" style={responsive}>
          <table className="tableClass">
          <div >
            <tr>
              <th> Date </th>
              <th> Event </th>
              <th> Location </th>
              <th> Price </th>
            </tr>
          </div>
          { upcomingEvents.map(function(item) {
              return (
                <TicketListItem searchItem={item}/>
              )
            })
          }
          </table>
        </li>
        <li className="flex-item-ticketCompare">
          <div className="card">
            <div className="cardContainer">
              <img src={imgUrl} ></img>
              <h2> Artist Text </h2>
              <p> Artist Description Goes Here </p>
            </div>
          </div>
          <div className="card">
            <div className="cardContainer">
              <h2> TicketMaster </h2>
              <p> Artist Description Goes Here </p>
              <h3>Price</h3>
              <button className="buyButton">Buy</button>
            </div>
          </div>
          <div className="card">
            <div className="cardContainer">
              <h2> SeatGeek </h2>
              <p> Artist Description Goes Here </p>
              <span>
              <h3>Price</h3>
              <button className="buyButton">Buy</button>
              </span>
            </div>
          </div>
        </li>
        <li className="flex-item-gutter"></li>
      </ul>
    </div>

  )
}

export default TicketList;

// style={imgCard}
