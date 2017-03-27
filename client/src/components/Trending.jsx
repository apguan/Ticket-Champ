import React from 'react';
import TrendingItem from './TrendingItem.jsx';

class Trending extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container">

          {this.props.clicked ? (
            <div className="jumbotron loader">
            <img className="img-center" src="https://s3-us-west-1.amazonaws.com/zollstorage/ticket-loader-lowRes.gif"/>
            <h2 className="loadingText" data-text="Finding Ticket Prices…"> Finding Ticket Prices... </h2>
            </div>)
          :
          (
            <div>
              <div className="jumbotron">
                <h1>Champ Tickets</h1>
              </div>
              <div id="trending" className="animate slideInUp row list-group">
                 {this.props.trending.map( (item, key) =>
                  <TrendingItem key={key} item={item} search={this.props.search} changeClickState={this.props.clickState}/>
                  )}
              </div>
            </div>
            )
          }


      </div>
    )
  }
}


export default Trending;