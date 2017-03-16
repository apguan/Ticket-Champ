import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import SearchUnit from './components/SearchUnit.jsx';

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      value: {
        location: "",
        search: ""
      }
    }
    this.search = this.search.bind(this);
  }

  search(term) {
    $.ajax({
        type:"POST",
        url:"/event",
        data: JSON.stringify(term),
        success: function() {
          console.log('Post Data Success');
        },
        error: function() {
          console.log('try again');
        }
    })
  }

  componentDidMount() {
    // setState({
    // data:
    // $.ajax({
    //     type:"GET",
    //     url:"/home",
    //     // data: data,
    //     success: function() {
    //       console.log('Post Data Success')
    //     }
    // })
  }


  render() {
    return(
      <div>
        <SearchUnit searchstate={this.state.value} onSearch={this.search}/>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
