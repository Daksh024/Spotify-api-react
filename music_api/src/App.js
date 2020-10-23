import React, {Component} from 'react';
import Searchbar from './components/searchbar';

class App extends Component{

  render(){
    return <div className="MainContent">
      <div className="navbar navbar-expand-lg navbar-dark bg-secondary justify-content-center">
        <a className="navbar-brand" href=".">My Music</a>
      </div>
      <Searchbar/>
    </div>
  }

}

export default App;
