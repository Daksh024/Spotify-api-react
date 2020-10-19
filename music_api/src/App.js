import React, {Component} from 'react';
import Searchbar from './components/searchbar';
import Searchresults from './components/searchresults';
// import SearchResults from "./components/searchresults";
// import playlist from '../components/playlist'
// import searchbar from '../components/searchbar'
// import searchlist from '../components/searchlist'

class App extends Component{
  constructor(props){
    super(props);

    this.state = {
      serachresults:[],
    }

    this.search = this.search.bind(this);

  }

  search(term){
    // Spotify.search(term)
    // .then(searchresults => {
    //   this.setState({
    //     searchresults:searchresults
    //   })
    // });
    console.log(term)
  }

  render(){
    return <div className="MainContent">
      <div className="navbar navbar-expand-lg navbar-dark bg-secondary justify-content-between">
        <a className="navbar-brand" href=".">My Music</a>
        <Searchbar onSearch={this.search}/> 
        {/* TODO #3 search doesnot work as required. */}
      </div>
      <Searchresults searchresults={this.state.searchresults} />
    </div>
  }

}

export default App;
