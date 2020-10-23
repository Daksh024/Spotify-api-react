import React, {Component} from 'react';
import Searchbar from './components/searchbar';
import Searchresult from './components/searchresult';

// let accessToken;

class App extends Component{

  render(){
    return <div className="MainContent">
      <div className="navbar navbar-expand-lg navbar-dark bg-secondary justify-content-between">
        <a className="navbar-brand" href=".">My Music</a>
        <Searchbar/>
      </div>
      <br/>
      <Searchresult/>
    </div>
  }

}

export default App;
