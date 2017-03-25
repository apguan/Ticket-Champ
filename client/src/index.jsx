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
          console.log("SERVER RES ARR 0", JSON.stringify(searchRes[0]))
          console.log("SERVER RES ARR 1", searchRes[1])

          context.setState({
            searchResults: searchRes[0],
            compareResults: searchRes[1]
          })

          // $("#print").append(output)
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
              <TicketList searchRes={this.state.searchResults} compareRes={this.state.compareResults} clickstate={this.changeClickState} clicked={this.state.clicked} />
            </div>
            ) :
          (<Trending trending={this.state.trending} search={this.search} loading={this.changeClickState} clicked={this.state.clicked}/>)
        }
          <div className="container">
            <footer className="footer">
              <p>&copy; 2017 TicketPal, Inc.</p>
            </footer>
          </div>
        </div>

      )
    } else {

      return (
        <div>
          <SearchUnit searchstate={this.state.value} onSearch={this.search} clickstate={this.changeClickState} />
          <div className="jumbotron">
            <div className="container">
              <h1>Trending</h1>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <h2>Trending 1</h2>
                <img src='https://placeholdit.imgix.net/~text?txtsize=28&txt=300%C3%97200&w=300&h=200' />
                <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>
              </div>

              <div className="col-md-4">
                <h2>Trending 2</h2>
                <img src='https://placeholdit.imgix.net/~text?txtsize=28&txt=300%C3%97200&w=300&h=200' />
                <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. </p>
              </div>

              <div className="col-md-4">
                <h2>Trending 2</h2>
                <img src='https://placeholdit.imgix.net/~text?txtsize=28&txt=300%C3%97200&w=300&h=200' />
               <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>
              </div>

            </div>


          </div>
            <div className="container">
              <footer className="footer">
                <p>&copy; 2017 TicketPal, Inc.</p>
              </footer>
            </div>

        </div>

        )
    }
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
