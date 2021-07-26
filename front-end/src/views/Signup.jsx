import React, { Component } from 'react'
import axios from 'axios'


export default class Signup extends Component {
    constructor() {
        super()


        this.state = {
            username: "",
            password: "",
            errors: []
        }
        this.getSignup = this.getSignup.bind(this)
        this.validateForm = this.validateForm.bind(this)
    }

    validateForm() {
        const errors = []

        const regexPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{4,}$/
        if (!regexPassword.test(this.state.password)) {
            errors.push("Passwords must have at least 4 characters, 1 number, 1 upper and 1 lowercase")
        }
        return errors
    }

    async getSignup() {
        try {
            const validationErrors = this.validateForm()
            console.log("test validationerrors: ", validationErrors)
            if (validationErrors.length === 0) {

                alert("you are now registred, please login !")
                const url = "http://localhost:8000/auth/signup"
                const { data } = await axios.post(url, { username: this.state.username, password: this.state.password })
                console.log(data);
                localStorage.setItem('token', data.token);
                this.props.history.push("/login");


            } else (
                this.setState({
                    errors: validationErrors
                })


            )
        } catch (error) {
            console.log("errror", error);

        }
    }


    render() {
        const alert = this.props.alert;

        return (

            <div className="pt-5">
                {this.state.errors && <div>

                    <div className="row">
                        <div className="offset-3 col-6 mx-auto">
                            {this.state.errors.map((error) => {
                                return <div className="alert alert-danger" role="alert">
                                    {error}
                                </div>
                            })}
                        </div>
                    </div>
                </div>}
                <div className="container">
                    <h1 className="text-center pt-5">Didn't register yet? Please Sign Up</h1>
                    <div className="input-group pt-5">
                        <input type="text" className="form-control" placeholder="Name" aria-label="Name" aria-describedby="button-addon2" onChange={(e) => this.setState({ username: e.target.value })}></input>
                    </div>
                    <div class="input-group pt-5">
                        <input type="password" className="form-control" placeholder="password" aria-label="Name" aria-describedby="button-addon2" onChange={(e) => this.setState({ password: e.target.value })}></input>
                    </div>
                    <div className="d-flex justify-content-center pt-4">

                        <button className="btn btn-secondary" onClick={() => this.getSignup()}>Sign up</button>
                    </div>
                </div>
            </div>

        )
    }
}
