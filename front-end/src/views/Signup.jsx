import React, { Component } from 'react'

export default class Signup extends Component {
    render() {
        return (

            <div className="pt-5">

                <div className="container">
                    <h1 className="text-center pt-5">Didn't register yet? Please Sign Up</h1>
                    <div class="input-group pt-5">
                        <input type="text" class="form-control" placeholder="Name" aria-label="Name" aria-describedby="button-addon2"></input>
                    </div>
                    <div class="input-group pt-5">
                        <input type="password" class="form-control" placeholder="password" aria-label="Name" aria-describedby="button-addon2"></input>
                    </div>
                    <div className="d-flex justify-content-center pt-4">

                        <button className="btn btn-secondary" >Sign up</button>
                    </div>
                </div>
            </div>

        )
    }
}
