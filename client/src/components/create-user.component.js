import React, {Component} from 'react'
import axios from 'axios'

export default class CreateUser extends Component{
    constructor(props) {
        super(props)

        this.onChangeUsername=this.onChangeUsername.bind(this)
        this.onSubmit=this.onSubmit.bind(this)


        this.state = {
            username: '',
        }
    }

    onChangeUsername(e){
        this.setState({
            username: e.target.value
        })
    }

    onSubmit(e){
        e.preventDefault()
        
        const user = {
            username: this.state.username
        }
        console.log(user);

        axios.post('http://localhost:3001/users/add', user)
        .then(res =>console.log(res.data))

        this.setState({
            username: ''
        })
       
    }

    render() {
        return(
            <div>
                <h3 className= 'text-center'>Create New User</h3>
                <br/>
                <form onSubmit={this.onSubmit}>
                    <div>
                        <div className="text-center"> 
                        <input type='text'
                        placeholder="Username"
                        required
                        value={this.state.username}
                        onChange={this.onChangeUsername}
                        />
                        </div>
                        <br/>
                    </div>
                    <div className= "text-center">
                        <input type="submit" value ="Create User"/>
                    </div>
                </form>
            </div>
        )
    }
}