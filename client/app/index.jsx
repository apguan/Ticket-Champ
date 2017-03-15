import React from 'react';
import {render} from 'react-dom';
import $ from 'jquery';

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {}
  }

// componentDidMount() {
//   $ajax
// }




  render  () {
    return <p>We up</p>;
  }
}

render (<App/>, document.getElementById('app'));


