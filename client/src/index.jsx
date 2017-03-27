import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import SearchUnit from './components/SearchUnit.jsx';
import TicketList from './components/TicketList.jsx';
import Trending from './components/Trending.jsx';
import TrendingItem from './components/TrendingItem.jsx';

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      trending: [],
      searchResults: [],
      compareResults: [],
      clicked: false
    }
    this.search = this.search.bind(this);
    this.changeClickState = this.changeClickState.bind(this);
    this.changePage = this.changePage.bind(this);
  }

  changePage() {
    console.log('fired again')
    this.setState({
      searchResults: [],
    })
  }

  search(value) {

    console.log('searching post input', JSON.stringify(value))

    var context = this;
    $.ajax({
        type:"POST",
        url:"/event",
        data: JSON.stringify(value),
        success: function(output) {
          console.log('Post Data Success Search', output);
          var searchRes = JSON.parse(output);
          console.log("SERVER RES ARR 0", searchRes[0])
          console.log("SERVER RES ARR 1", searchRes[1])
          console.log("SERVER RES ARR 2", searchRes[2])

          context.setState({
            searchResults: searchRes[0],
            compareResults: searchRes[1]
          })
        },
        error: function() {
          console.log('try again');
        }
    })
  }

  // make a new function to set to location component
  changeClickState(boolean) {
    this.setState({clicked: boolean})
    console.log('being called', boolean);
  }

  componentDidMount() {

    var context = this;
    $.ajax({
        type:"GET",
        url:"/home",
        success: function(response) {
          context.setState({
            trending: response
          })
          console.log('success', response);
        },
        error: function(error) {
          console.log('error getting back top three');
        }
    })
  }


  render() {

    if (this.state.trending.length > 0) {

      return (

        <div>
          <SearchUnit changePage={this.changePage} onSearch={this.search} clickState={this.changeClickState}/>

        { this.state.searchResults.length > 0 ?
          (
            <div className="container">
              <TicketList searchRes={this.state.searchResults} compareRes={this.state.compareResults} clickState={this.changeClickState} clicked={this.state.clicked} search={this.search}/>
            </div>
            ) :
          (<Trending trending={this.state.trending} search={this.search} clickState={this.changeClickState} clicked={this.state.clicked}/>)
        }
          <div className="container">
            <footer className="footer">
              <p>&copy; 2017 Ticket Champ ● Created by Aly, Allen, Chris, & Sam ● #73or️☠️</p>
            </footer>
          </div>
        </div>

      )
    } else {

      return (
      <div>
        <div>
          <SearchUnit changePage={this.changePage} searchstate={this.state.value} onSearch={this.search} clickState={this.changeClickState} />
          <div className="jumbotron">
                <h1>Trending Champs</h1><div className="champ">Champ Tickets @ Champ Prices</div>
          </div>
        </div>
          <div className="container">
            <footer className="footer">
              <p>&copy; 2017 Ticket Champ ● Created by Aly, Allen, Chris, & Sam ● #73or️☠</p>
            </footer>
          </div>
        </div>
        )
    }
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
