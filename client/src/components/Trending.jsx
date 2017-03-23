import React from 'react';
import TrendingItem from './TrendingItem.jsx';

class Trending extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
      <div className="jumbotron">
        <div className="container">
          <h1>Trending</h1>
        </div>
      </div>

        <div className="row">
        {this.props.trending.map( (item, key) =>
          <TrendingItem key={key} item={item} />
        )}
        </div>
      </div>
    )
  }
}


export default Trending;