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


  search(value) {

  // console.log('APP STATE POST', this.state.value)

    $.ajax({
        type:"POST",
        url:"/event",
        data: `${value}`,
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
            <h2>Trending 3</h2>
            <img src='https://placeholdit.imgix.net/~text?txtsize=28&txt=300%C3%97200&w=300&h=200' />
           <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>
          </div>

        </div>


        <footer>
          <p>&copy; 2017 TicetPal, Inc.</p>
        </footer>
      </div>

    </div>

    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
