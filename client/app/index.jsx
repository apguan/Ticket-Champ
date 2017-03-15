import React from 'react';
import {render} from 'react-dom';
import $ from 'jquery';

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      value: ""
    }
  }

search (input) {
  $.ajax({
      type:"POST",
      url:"/event",
      data: input,
      success: function() {
        console.log('Post Data Success')
      }
  })
}

componentDidMount() {
  $.ajax({
      type:"GET",
      url:"/home",
      // data: data,
      success: function() {
        console.log('Post Data Success')
      }
  })
}


  render  () {
    return <p>We up</p>;
  }
}

render (<App/>, document.getElementById('app'));


