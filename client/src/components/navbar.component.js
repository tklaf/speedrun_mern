import React, {Component} from 'react'
import {Link} from 'react-router-dom'

export default class Navbar extends Component {

    render(){
        return(
            <nav>
            <Link to = "/">Speedrun Tracker</Link>
            <div>
                <ul>
                    <li>
                        <Link to="/">Speedruns</Link>
                    </li>
                    <li>
                        <Link to="/create">Create Speedrun Log</Link>
                    </li>
                    <li>
                        <Link to="/user">Create User</Link>
                    </li>
                </ul>
            </div>
            </nav>
        )
    }
}