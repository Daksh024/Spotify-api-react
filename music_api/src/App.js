import React, {Component} from 'react';
import Searchbar from './components/searchbar';
// import searchresult from './components/searchresult';
import Spotify from "./components/Spotify";

// let accessToken;

class App extends Component{
  constructor(props){
    super(props);

    this.state = {
      client_id:'a095b760fd304570bd1586ff9bdde955',
      redirect_uri:'http://localhost:3000',
      serachresults:[],
      value:'arjit'
    }

    this.search = this.search.bind(this);
  }

  search(term){
    Spotify.search(term).then(searchresult => {
        this.setState({searchresult:searchresult})
    });
  }


  render(){
    return <div className="MainContent">
      <div className="navbar navbar-expand-lg navbar-dark bg-secondary justify-content-between">
        <a className="navbar-brand" href=".">My Music</a>
        <Searchbar onSearch={this.search}/> 

      </div>
    </div>
  }

}

export default App;
