import React, { Component } from 'react'
import axios from 'axios'


export default class Login extends Component {
    constructor() {
        super()

        this.state = {
            username: "",
            password: ""
        }

    }
    
    getLogin() {        
        
        try {
            axios
            const url = "http://localhost:8000/auth/login"
    
            .get(url)
            
            
            this.setState({
                username : data,
                password : data
            })
        } catch (error) {
            console.log("errror", error);
            
        }
    }



    render() {
        return (

            <div className="pt-5">

                <div className="container">
                    <h1 className="text-center pt-5">Already subscribed? Please Log in</h1>
                    <div className="input-group pt-5">
                        <input type="text" className="form-control" placeholder="Name" aria-label="Name" aria-describedby="button-addon2"></input>
                    </div>
                    <div className="input-group pt-5">
                        <input type="password" className="form-control" placeholder="password" aria-label="Name" aria-describedby="button-addon2"></input>
                    </div>
                    <div className="d-flex justify-content-center pt-4">

                        <button className="btn btn-secondary" >log in</button>
                    </div>
                </div>
            </div>

        )
    }
}
