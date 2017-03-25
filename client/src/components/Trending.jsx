import React from 'react';
import TrendingItem from './TrendingItem.jsx';

class Trending extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container">
        <div className="jumbotron">
          {this.props.clicked ? (<img className="img-center" src="https://s3-us-west-1.amazonaws.com/zollstorage/ticket-loader-lowRes.gif"/>)
          :
          (<h1>What's Hot</h1>)
        }
        </div>
        <div id="trending" className="animate slideInUp row list-group">
           {this.props.trending.map( (item, key) =>
            <TrendingItem key={key} item={item} search={this.props.search} changeClickState={this.props.clickState}/>
           )}
        </div>
      </div>
    )
  }
}


export default Trending;