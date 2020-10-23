import React, {Component} from 'react';
import Spotify from './Spotify'

class Searchbar extends Component{
    constructor(props){
        super(props)

        this.state = {
            value : '',
            result:[]
        }

        this.startsearch = this.startsearch.bind(this);
        this.handlechange = this.handlechange.bind(this);
    }

    handlechange(event){
        this.setState({
            value: event.target.value
        });
    }

    startsearch(event){
        console.log('Searching for :' + this.state.value);
        Spotify.search(this.state.value).then(searchresult => {
            this.setState({result:searchresult})
        });
        event.preventDefault();
        console.log(this.state.result)
    }

    render(){
        return <div className="search">
            <form className="form-inline my-2 my-lg-0 justify-content-between" onSubmit={this.startsearch}>
                <input className="form-control mr-sm-2" onChange = {this.handlechange} type="text" placeholder="Search" aria-label="Search"/>
                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
        </div>
    }
}

export default Searchbar;