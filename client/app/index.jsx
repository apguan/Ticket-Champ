import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
// import Search from '../components/SearchBar.jsx';

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      value: "",
      data: []
    }
  }

search(input) {
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
  // setState({
  // data:
  $.ajax({
      type:"GET",
      url:"/home",
      // data: data,
      success: function() {
        console.log('Post Data Success')
      }
  })
}
// })


  render() {
    return <p>We up</p>;
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
