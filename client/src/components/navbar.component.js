import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import "../styles/navbar.css"

export default class Navbar extends Component {

    render(){
        return(
            <nav className='navbar navbar-expand-lg'>
                <Link to = "/" className="navbar-brand styles">Speedrun Tracker</Link>
                <div className='navbar-collapse'>
                    <ul className="navbar-nav">
                        <li className="nav-link">
                            <Link to="/" className="styles">Speedruns</Link>
                        </li>
                        <li className="nav-link">
                            <Link to="/create" className="styles">Create Speedrun Log</Link>
                        </li>
                        <li className="nav-link">
                            <Link to="/user" className="styles">Create User</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}