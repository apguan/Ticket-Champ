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
      compareResults: []
    }
    this.search = this.search.bind(this);
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

          context.setState({
            searchResults: searchRes[1],
            compareResults: searchRes[0]
          })
        },
        error: function() {
          console.log('try again');
        }
    })
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
    console.log('Trending Test 1', this.state.trending)


    if (this.state.trending.length > 0) {
      console.log('Trending Test 2', this.state.trending)
      return (

      <div>
        <SearchUnit onSearch={this.search}/>

      { this.state.searchResults.length > 0 ?
        (
          <ul className="flex-container">
            <li className="flex-item-gutter" ></li>
            <TicketList searchRes={this.state.searchResults}/>
            <li className="flex-item-gutter" ></li>
          </ul>
          ) :
        (<Trending trending={this.state.trending} />)
      }
        <div className="container">
          <footer className="footer">
            <p>&copy; 2017 TicketPal, Inc.</p>
          </footer>
        </div>

      </div>

      )

    } else {
      console.log('Trending Test 3', this.state.trending)

      return (
        <div>

          <SearchUnit searchstate={this.state.value} onSearch={this.search}/>


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
