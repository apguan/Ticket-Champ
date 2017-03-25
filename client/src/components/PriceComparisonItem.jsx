import React from 'react';
import moment from 'moment';

function PriceComparisonItem (props) {

  var formattedDate = (moment(props.compareItem.date).format('LLLL'))

  // .split(', 2017 ' || ', 2018 ' || ', 2019 ' || ', 2020 ');
  // var weekDate = formattedDate[0];
  // var time = formattedDate[1];


  console.log('EVENT URL :', props.compareItem.eventUrl)
  return (
        <div className="col-md-12 poster">
          <div className="animated flipInX thumbnailCompare">
            <h3>{props.compareItem.venueName}</h3>
            <h4>{props.compareItem.venueLocation}</h4>
            <h5>{formattedDate}</h5>

            <div className="captionCompare">
              <table className="table">
                <tbody>
                  <tr>
                    <th></th>
                      <td colspan="1"><h3>${props.compareItem.lowPrice}</h3><span>Min</span></td>
                      <td colspan="1"><h3 className="bigAverage">${props.compareItem.averagePrice}</h3><span>Average</span></td>
                      <td colspan="1"><h3>${props.compareItem.highPrice}</h3><span>Max</span></td>
                  </tr>
                </tbody>
              </table>

              <button onClick={
                function() {
                  var url = props.compareItem.eventUrl;
                  // window.location.href = url;
                  window.open(url)
                }

                } className="buyButton">View Deal</button>
            </div>
            {
              //handling for dynamic vendor image rendering
              props.compareItem.apiId > 0 ?
              (<img src={"https://s3-us-west-1.amazonaws.com/zollstorage/sg-cloud-logo.png"} width='50%' alt=""/>) :
              (<img src={"https://s3-us-west-1.amazonaws.com/zollstorage/tm-cloud-logo.png"} width='50%' alt=""/>)
            }
          </div>
        </div>
  )
}

export default PriceComparisonItem;