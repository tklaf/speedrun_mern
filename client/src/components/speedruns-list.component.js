import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import {Table, Container, Row, Col} from 'react-bootstrap'

const Speedrun = props => (
    <tr>
        <td>{props.speedrun.username}</td>
        <td>{props.speedrun.gameTitle}</td>
        <td>{props.speedrun.timeTookH} Hours</td>
        <td>{props.speedrun.timeTookM} Minutes</td>
        <td>{props.speedrun.timeTookS} Seconds</td>
        <td>{props.speedrun.timeTookMS} Milliseconds</td>
        <td>{props.speedrun.datePlayed.substring(0,10)}</td>
        <td>{props.speedrun.platformPlayed}</td>
        <td>
            <Link to ={"/edit/" + props.speedrun._id}>edit</Link> | <a href="#" onClick={() =>{props.deleteSpeedrun(props.speedrun._id)}}>delete</a>
        </td>
    </tr>
)

export default class SpeedrunsList extends Component{
    constructor(props){
    super(props)

    this.deleteSpeedrun = this.deleteSpeedrun.bind(this)

    this.state = {speedruns: []}
    }

    componentDidMount(){
        axios.get('http://localhost:3001/speedruns/')
        .then(response =>{
            this.setState({speedruns: response.data})
        })
        .catch((e) =>{
            console.log(e)
        })
    }
    deleteSpeedrun(id) {
        axios.delete('http://localhost:3001/speedruns/' + id)
        .then(res => console.log(res.data))
        this.setState({
        speedruns: this.state.speedruns.filter(element=>element._id !== id) //the '_id' is coming from the id given in insomnia.
        })
    }

    SpeedrunList(){
        return this.state.speedruns.map(currentSpeedrun =>{
            return <Speedrun speedrun = {currentSpeedrun} deleteSpeedrun = {this.deleteSpeedrun} key = {currentSpeedrun._id}/>
        })
    }

    render(){
        return(
            <div>
                <h2 className='text-center font-weight-bold'>Logged Speedruns</h2>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Username</th>
                            <th>Game Title</th>
                            <th>Duration(Hours)</th>
                            <th>Duration(Minutes)</th>
                            <th>Duration(Seconds)</th>
                            <th>Duration(Milliseconds)</th>
                            <th>Date Played</th>
                            <th>Platform Played</th>
                            <th>Make Changes</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.SpeedrunList()}
                    </tbody>
                </Table> 
            </div>
        )
    }
}