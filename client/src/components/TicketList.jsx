import React from 'react';
import TicketListItem from './TicketListItem.jsx';
import PriceComparisonItem from './PriceComparisonItem.jsx';


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

  var upcomingEvents = props.searchRes.splice();

  return (
    <div className="row">
      <div>

        <div className="img-banner" width='100%'style={imgBannerUpdate}>
        <h1 className="animated zoomInDown artist-name">{props.searchRes[0].venueName}</h1>
        </div>

      </div>

      <div className='row'>

       <div className='col-md-6'>
       <div className="table-responsive">
          <table className="table">
            <thead>
                <tr>
                    <th>Event Date</th>
                    <th>Event Name</th>
                    <th>Location</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>
              { props.searchRes.map(function(item) {
                  return (
                    <TicketListItem searchItem={item}/>
                  )
                })
              }
            </tbody>
            </table>
          </div>
        </div>

       <div className='col-md-6'>
          <div className="col-md-12 priceCompare">
            Price Comparison
          </div>
          <div className="row well">
            { props.searchRes.map(function(item) {
                  return (
                    <PriceComparisonItem compareItem={item} imgUrl={imgUrl}/>
                  )
                })
              }
          </div>

       </div>

      </div>



      {/*<ul className="flex-container">
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
          { props.searchRes.map(function(item) {
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
              <h2> {props.searchRes[0].venueName} </h2>
              <p> {props.searchRes[0].city} </p>
            </div>
          </div>
          <div className="card">
            <div className="cardContainer">
              <h2> TicketMaster </h2>
              <p> {props.searchRes[0].venueLocation} </p>
              <h3>{props.searchRes[0].averagePrice}</h3>
              <button className="buyButton">Buy</button>
            </div>
          </div>
          <div className="card">
            <div className="cardContainer">
              <h2> SeatGeek </h2>
              <p> {props.searchRes[0].venueLocation} </p>
              <span>
              <h3>{props.searchRes[0].averagePrice}</h3>
              <button className="buyButton">Buy</button>
              </span>
            </div>
          </div>
        </li>
        <li className="flex-item-gutter"></li>
      </ul>*/}

    </div>
  )
}

export default TicketList;

// style={imgCard}
