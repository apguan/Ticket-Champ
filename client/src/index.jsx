import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Search from './components/SearchBar.jsx';
import Location from './components/LocationSelector.jsx';

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      value: "",
      local: "",
      data: []
    }
    console.log('APP STATE', this.state.value)
  }

  search(value) {
  console.log('APP STATE POST', this.state.value)

    $.ajax({
        type:"POST",
        url:"/event",
        data: `${value}`,
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
      <ul className="flex-container">
          <li className="flex-item-gutter" ></li>
          <li className="flex-item-logo" >{<img src={'https://s3-us-west-1.amazonaws.com/zollstorage/ticket_champ_logo(4-)1).png'} className='img-responsive'/>}</li>
          <Search onSearch={this.search.bind(this)}/>
          <Location/>
          <li className="flex-item-gutter" ></li>

      </ul>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
