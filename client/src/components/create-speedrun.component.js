import React, {Component} from 'react'
import axios from 'axios'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css"
import {Row} from 'react-bootstrap'
import "../styles/createSpeedrun.css"

export default class CreateSpeedrun extends Component{
    constructor(props) {
        super(props)

        this.onChangeUsername=this.onChangeUsername.bind(this)
        this.onChangeGameTitle=this.onChangeGameTitle.bind(this)
        this.onChangeTimeTookH=this.onChangeTimeTookH.bind(this)
        this.onChangeTimeTookM=this.onChangeTimeTookM.bind(this)
        this.onChangeTimeTookS=this.onChangeTimeTookS.bind(this)
        this.onChangeTimeTookMS=this.onChangeTimeTookMS.bind(this)
        this.onChangeDatePlayed=this.onChangeDatePlayed.bind(this)
        this.onChangePlatformPlayed=this.onChangePlatformPlayed.bind(this)
        this.onSubmit = this.onSubmit.bind(this)


        this.state = {
            gameTitle: '',
            username: '',
            timeTookH: '',
            timeTookM: '',
            timeTookS: '',
            timeTookMS: '',
            datePlayed: new Date(),
            platformPlayed: '',
            users:[]
        }
    }
    componentDidMount(){
        axios.get('http://localhost:3001/users/')
        .then(response => {
            if (response.data.length >0){
                this.setState({
                    users: response.data.map(user =>user.username),
                    user: response.data[0].username
                })
            }
        })
    }
    onChangeUsername(e){
        this.setState({
            username: e.target.value
        })
    }
    onChangeGameTitle(e){
        this.setState({
            gameTitle: e.target.value
        })
    }
    onChangeTimeTookH(e){
        this.setState({
            timeTookH: e.target.value
        })
    }
    onChangeTimeTookM(e){
        this.setState({
            timeTookM: e.target.value
        })
    }
    onChangeTimeTookS(e){
        this.setState({
            timeTookS: e.target.value
        })
    }
    onChangeTimeTookMS(e){
        this.setState({
            timeTookMS: e.target.value
        })
    }
    onChangeDatePlayed(date){
        this.setState({
            datePlayed: date
        })
    }
    onChangePlatformPlayed(e){
        this.setState({
            platformPlayed: e.target.value
        })
    }
    onSubmit(e){
        e.preventDefault()
        
        const speedrun = {
            username: this.state.username,
            gameTitle: this.state.gameTitle,
            timeTookH: this.state.timeTookH,
            timeTookM: this.state.timeTookM,
            timeTookS: this.state.timeTookS,
            timeTookMS: this.state.timeTookMS,
            datePlayed: this.state.datePlayed,
            platformPlayed: this.state.platformPlayed
        }
        console.log(speedrun);

        axios.post('http://localhost:3001/speedruns/add', speedrun)
        .then(res => console.log(res.data))


        window.location = '/'
       
    }

    render(){
        return(
            <div className='card text-center'>
                <h3>Create New Speedrun</h3>     
                <form onSubmit={this.onSubmit}>
                    <div className="p-5">
                        <label>Username: </label>   
                        <div  className="pb-2">
                            <select ref="userInput"
                            required
                            value={this.state.username}
                            onChange={this.onChangeUsername}>
                                {
                                    this.state.users.map(function(user){
                                        return <option
                                        key = {user}
                                        value = {user}>{user}
                                        </option>
                                    })
                                }
                            </select>
                        </div>
                            <div>
                            <input type='text'
                            required
                            placeholder='Game Title'
                            value={this.state.gameTitle}
                            onChange={this.onChangeGameTitle} />
                            </div>
                            <Row className ='justify-content-center p-2'>
                                <div className="pr-2">
                                <input type='text'
                                required
                                placeholder="Duration(Hours)"
                                value={this.state.timeTookH}
                                onChange={this.onChangeTimeTookH} />
                                </div>
                                <div className="pr-2">
                                <input type='text'
                                required
                                placeholder="Duration(Minutes)"
                                value={this.state.timeTookM}
                                onChange={this.onChangeTimeTookM} />
                                </div>
                                <div className="pr-2">
                                <input type='text'
                                required
                                placeholder="Duration(Seconds)"
                                value={this.state.timeTooks}
                                onChange={this.onChangeTimeTookS} />
                                </div>
                                <div className="pr-2">
                                <input type='text'
                                required
                                placeholder="Duration(Milliseconds)"
                                value={this.state.timeTookMS}
                                onChange={this.onChangeTimeTookMS} />
                                </div>
                            </Row>
                            <div>
                            <div>
                            <input type='text'
                            required
                            placeholder="Platform Played On"
                            value={this.state.platformPlayed}
                            onChange={this.onChangePlatformPlayed} />
                            </div>
                            </div>
                            <div>
                            <label>Date Played: </label>
                            <div>
                                <DatePicker
                                    selected={this.state.datePlayed}
                                    onChange={this.onChangeDatePlayed}
                                />
                            </div>
                        </div>
                    </div>
                    <div>
                        <input type="submit" value="Create Speedrun" />
                    </div>
                </form>
            </div>
        )
    }
}