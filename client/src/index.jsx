import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import SearchUnit from './components/SearchUnit.jsx';
import TicketList from './components/TicketList.jsx';

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      value: {
        location: "",
        search: ""
      },
      trending: [],
      searchResults: []
    }
    this.search = this.search.bind(this);
    }


  search(value) {

  console.log('searching post input', value)

    var context = this;
    $.ajax({
        type:"POST",
        url:"/event",
        data: value,
        success: function(output) {
          console.log('Post Data Success Search', JSON.parse(output));
          var searchRes = JSON.parse(output);
          context.setState({
            searchResults: searchRes
          })

        },
        error: function() {
          console.log('try again');
        }
    })
  }

  componentWillMount() {
    // setState({
    // data:
    var context = this;
    $.ajax({
        type:"GET",
        url:"/home",
        // data: data,
        success: function(response) {
          console.log('GET Data Success Trending', JSON.parse(response));
          var trendingRes = JSON.parse(response);
          context.setState({
            trending: trendingRes
          })

        }
    })
  }


  render() {
    console.log('Trending Test 1', this.state.trending)


    if (this.state.trending.length > 0) {
      console.log('Trending Test 2', this.state.trending)
      return (

      <div>
        <SearchUnit searchstate={this.state.value} onSearch={this.search}/>

      { this.state.searchResults.length > 0 ?
        (
          <ul className="flex-container">
            <li className="flex-item-gutter" ></li>
            <TicketList searchRes={this.state.searchResults}/>
            <li className="flex-item-gutter" ></li>
          </ul>
          ) :
        (<div>
          <div className="jumbotron">
            <div className="container">
              <h1>Trending</h1>
            </div>
          </div>

          <div className="container">
            <div className="row">

              <div className="col-md-4">
                <h2>{this.state.trending[0].venueName}</h2>
                <img className="img-trending" src={this.state.trending[0].url} />
                <p>{this.state.trending[0].venueLocation}</p>
                <p>{this.state.trending[0].city}, {this.state.trending[0].state}</p>
              </div>

              <div className="col-md-4">
                <h2>{this.state.trending[1].venueName}</h2>
                <img className="img-trending" src={this.state.trending[1].url} />
                <p>{this.state.trending[1].venueLocation} </p>
                <p>{this.state.trending[1].city}, {this.state.trending[1].state}</p>
              </div>

              <div className="col-md-4">
                <h2>{this.state.trending[2].venueName}</h2>
                <img className="img-trending" src={this.state.trending[2].url} />
               <p>{this.state.trending[2].venueLocation}</p>
               <p>{this.state.trending[2].city}, {this.state.trending[2].state}</p>
              </div>
            </div>
          </div>
        </div>)
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
