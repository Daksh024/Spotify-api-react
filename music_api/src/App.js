import React, {Component} from 'react';
import { Navbar } from './components/navbar';
// import playlist from '../components/playlist'
// import searchbar from '../components/searchbar'
// import searchlist from '../components/searchlist'

class App extends Component{

  render(){
    return <div className="MainContent">
      <Navbar/>
    </div>
  }

}

export default App;
