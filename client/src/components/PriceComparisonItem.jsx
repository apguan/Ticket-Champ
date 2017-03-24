import React from 'react';

function PriceComparisonItem (props) {

  console.log('tick list item props: ', props);
  //TO DO

  // RENDER EACH ITEM IN A TABLE
  return (
        <div className="col-md-12 poster">
          <div className="animated flipInX thumbnail">
            <img src={props.imgUrl} width='50%' alt=""/>
            <div className="caption">
              <h3>${props.compareItem.averagePrice}</h3>
              <p><a href="#" className="btn btn-primary" role="button">Purchase</a></p>
              <h4>{props.compareItem.city}</h4>
              <p>{props.compareItem.venueName}</p>
            </div>
          </div>
        </div>
  )
}

export default PriceComparisonItem;