import React, { Component } from 'react'
import axios from 'axios'

export default class Signup extends Component {
    constructor() {
        super()


        this.state = {
            username: "",
            password: ""
        }
        this.getSignup=this.getSignup.bind(this)
    }
    

    async getSignup() {
        try {
            const url = "http://localhost:8000/auth/signup"
            const {data} = await axios.post(url,{username:this.state.username , password:this.state.password})
          console.log(data);
           localStorage.setItem('token', data.token);
           this.props.history.push("/login");
            
        } catch (error) {
            console.log("errror", error);

        }
    }

    
    render() {
        return (

            <div className="pt-5">

                <div className="container">
                    <h1 className="text-center pt-5">Didn't register yet? Please Sign Up</h1>
                    <div className="input-group pt-5">
                        <input type="text" className="form-control" placeholder="Name" aria-label="Name" aria-describedby="button-addon2"onChange={(e) => this.setState({username : e.target.value})}></input>
                    </div>
                    <div class="input-group pt-5">
                        <input type="password" className="form-control" placeholder="password" aria-label="Name" aria-describedby="button-addon2"onChange={(e) => this.setState({password : e.target.value})}></input>
                    </div>
                    <div className="d-flex justify-content-center pt-4">

                        <button className="btn btn-secondary" onClick={() => this.getSignup()}>Sign up</button>
                    </div>
                </div>
            </div>

        )
    }
}
