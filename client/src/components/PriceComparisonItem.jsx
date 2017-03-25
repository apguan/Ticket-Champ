import React from 'react';

function PriceComparisonItem (props) {

  console.log('tick list item props: ', props);
  //TO DO

  // RENDER EACH ITEM IN A TABLE
  console.log('EVENT URL :', props.compareItem.eventUrl)
  return (
        <div className="col-md-12 poster">
          <div className="animated flipInX thumbnail">
          {props.compareItem.apiId > 0 ?
            (<img src={"https://s3-us-west-1.amazonaws.com/zollstorage/sg-cloud-logo.png"} width='50%' alt=""/>) :
            (<img src={"https://s3-us-west-1.amazonaws.com/zollstorage/tm-cloud-logo.png"} width='50%' alt=""/>)
          }

            <div className="caption">
              <h3>${props.compareItem.lowPrice}</h3>
              <button onClick={
                function() {
                  var url = props.compareItem.eventUrl;
                  // window.location.href = url;
                  window.open(url)
                }

                } className="buyButton">Purchase</button>
              <h4>{props.compareItem.city}</h4>
              <p>{props.compareItem.venueName}</p>
            </div>
          </div>
        </div>
  )
}

export default PriceComparisonItem;