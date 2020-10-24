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
        this.displayrow = this.displayrow.bind(this);
    }

    handlechange(event){
        this.setState({
            value: event.target.value
        });
        // this.startsearch(event); 
    }

    startsearch(event){
        console.log('Searching for :' + this.state.value);
        Spotify.search(this.state.value).then(searchresult => {
            this.setState({result:searchresult})
        });
        event.preventDefault();
        console.log(this.state.result);
        this.state.result.forEach(id => {
            this.displayrow(id)
        });
    }

    displayrow(obj){
        var node = document.createElement("LI");
        var textnode = document.createTextNode(obj.name);
        node.appendChild(textnode);
        document.getElementById('res_id').appendChild(node);
    }

    render(){
        return <div className="search">
            <br/>
            <form className="form-inline my-2 my-lg-0 justify-content-center" onSubmit={this.startsearch}>
                <input className="form-control mr-sm-2" onChange = {this.handlechange} type="text" placeholder="Search" aria-label="Search"/>
                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
            <br/>
            <div id='res_id'></div>
        </div>
    }
}

export default Searchbar;