import React, { Component } from 'react';

class searchresult extends Component {
    constructor(props){
        super(props)

        this.state ={
            results:[]
        }

        this.search = this.search.bind(this)
    }

    search(word){
        fetch(`https://api.spotify.com/v1/search?q=${word}&type=artist`,{method:'GET',})
        .then(console.log)
    }

    render() {
        return (
            <div className='SearchResults'>
                <p>{this.state.results}</p>
            </div>
        );
    }
}

export default searchresult;