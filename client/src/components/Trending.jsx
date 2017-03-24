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

        <div className="well well-sm">
          <strong>Display</strong>
          <div className="btn-group">
            <a href="#" id="list" className="btn btn-default btn-sm"><span className="glyphicon glyphicon-th-list">
            </span>List</a>
            <a href="#" id="grid" className="btn btn-default btn-sm"><span
                className="glyphicon glyphicon-th"></span>Grid</a>
          </div>
        </div>



        <div id="products" className="row list-group">
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