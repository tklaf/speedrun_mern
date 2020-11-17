import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import "../styles/navbar.css"

export default class Navbar extends Component {

    render(){
        return(
            <nav className='navbar navbar-dark'>
            <Link to = "/" className="navbar-brand">Speedrun Tracker</Link>
            <div>
                <ul className="navbar-nav">
                    <li className="nav-link">
                        <Link to="/">Speedruns</Link>
                    </li>
                    <li className="nav-link">
                        <Link to="/create">Create Speedrun Log</Link>
                    </li>
                    <li className="nav-link">
                        <Link to="/user">Create User</Link>
                    </li>
                </ul>
            </div>
            </nav>
        )
    }
}