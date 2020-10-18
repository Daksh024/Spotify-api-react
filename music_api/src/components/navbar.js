import React , { Component } from 'react';
import Searchbar from './searchbar';

export class Navbar extends Component{
    constructor(props){
        super(props)

        this.state = {
            name    :'suraj',
            age     :'24',
            place   :'Pune'
        }
    }
    render(){
        return <div className="Navbar ">
            <nav className='navbar navbar-expand-lg navbar-dark bg-secondary'>
            <a className="navbar-brand" href=".">My Music</a>
            <Searchbar/>
            </nav>
        </div>
    };
}
