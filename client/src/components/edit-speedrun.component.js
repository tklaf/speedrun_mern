import React, {Component} from 'react'
import axios from 'axios'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css"

export default class EditSpeedrun extends Component{
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
            timeTookH: 0,
            timeTookM: 0,
            timeTookS: 0,
            timeTookMS: 0,
            datePlayed: new Date(),
            platformPlayed: '',
            users:[]
        }
    }
    componentDidMount(){
        axios.get('http://localhost:3001/speedruns/' + this.props.match.params.id)
        .then(response =>{
            this.setState({
                username: response.data.username,
                gameTitle: response.data.gameTitle,
                timeTookH: response.data.timeTookH,
                timeTookM: response.data.timeTookM,
                timeTookS: response.data.timeTookS,
                timeTookMS: response.data.timeTookMS,
                datePlayed: new Date (response.data.datePlayed),
                platformPlayed: response.data.platformPlayed
            })
        })



        axios.get('http://localhost:3001/users/')
        .then(response => {
            if (response.data.length >0){
                this.setState({
                    users: response.data.map(user =>user.username),
                    
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

        axios.post('http://localhost:3001/speedruns/update' + this.props.match.params.id, speedrun)
        .then(res => console.log(res.data))


        window.location = '/'
       
    }

    render(){
        return(
            <div>
                <h3>Edit Speedrun Log</h3>     
                <form onSubmit={this.onSubmit}>   
                    <div>
                        <label>Username: </label>
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
                    <label>Game Title: </label>
                    <input type='text'
                    required
                    value={this.state.gameTitle}
                    onChange={this.onChangeGameTitle} />
                    </div>
                    <div>
                    <label>Duration(Hours): </label>
                    <input type='text'
                    required
                    value={this.state.timeTookH}
                    onChange={this.onChangeTimeTookH} />
                    </div>
                    <div>
                    <label>Duration(Minutes): </label>
                    <input type='text'
                    required
                    value={this.state.timeTookM}
                    onChange={this.onChangeTimeTookM} />
                    </div>
                    <div>
                    <label>Duration(Seconds): </label>
                    <input type='text'
                    required
                    value={this.state.timeTooks}
                    onChange={this.onChangeTimeTookS} />
                    </div>
                    <div>
                    <label>Duration(Milliseconds): </label>
                    <input type='text'
                    required
                    value={this.state.timeTookMS}
                    onChange={this.onChangeTimeTookMS} />
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
                    <div>
                    <label>Platform Played On: </label>
                    <div>
                    <input type='text'
                    required
                    value={this.state.platformPlayed}
                    onChange={this.onChangePlatformPlayed} />
                    </div>
                    </div>
                    <div>
                        <input type="submit" value="Edit Speedrun" />
                    </div>
                </form>
            </div>
        )
    }
}