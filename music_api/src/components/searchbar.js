import React, {Component} from 'react';

class Searchbar extends Component{
    constructor(props){
        super(props)

        this.state = {
            value : ''
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
        // event.preventDefault();
    }

    render(){
        return <div className="search">
            <form className="form-inline my-2 my-lg-0 justify-content-between" onSubmit={this.startsearch}>
                <input className="form-control mr-sm-2" value={this.state.value} onChange = {this.handlechange} type="text" placeholder="Search" aria-label="Search"/>
                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
        </div>
    }
}

export default Searchbar;