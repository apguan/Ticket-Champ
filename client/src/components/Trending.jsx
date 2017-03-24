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
          <h1>Trending</h1>
        </div>

        <div className="row">
          <div className="col-md-12">

           {this.props.trending.map( (item, key) =>
            <TrendingItem key={key} item={item} />
        )}
          </div>

        </div>

      </div>

    )
  }
}


export default Trending;