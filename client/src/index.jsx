import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Search from './components/SearchBar.jsx';

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      value: "",
      data: []
    }
  }

  search(term) {
    $.ajax({
        type:"POST",
        url:"/event",
        data: `${term}`,
        success: function() {
          console.log('Post Data Success')
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
        <p>We up</p>
        <Search onSearch={this.search.bind(this)}/>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
