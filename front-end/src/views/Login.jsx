import React, { Component } from 'react'
import axios from 'axios'



export default class Login extends Component {
    constructor() {
        super()


        this.state = {
            username: "",
            password: ""
        }
        this.getLogin=this.getLogin.bind(this)
    }
    

    async getLogin() {
        try {
            const url = "http://localhost:8000/auth/login"
            const {data} = await axios.post(url,{username:this.state.username , password:this.state.password})
          console.log(data);
           localStorage.setItem('token', data.token);
           this.props.history.push("/");
           window.location.reload();
            
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
                        <input type="text" className="form-control" placeholder="Name" aria-label="Name" aria-describedby="button-addon2" onChange={(e) => this.setState({username : e.target.value})} />
                    </div>
                    <div className="input-group pt-5">
                        <input type="password" className="form-control" placeholder="password" aria-label="Name" aria-describedby="button-addon2"onChange={(e) => this.setState({password : e.target.value})}></input>
                    </div>
                    <div className="d-flex justify-content-center pt-4">

                        <button className="btn btn-secondary" onClick={() => this.getLogin()} >log in</button>
                    </div>
                </div>
            </div>

        )
    }
}
