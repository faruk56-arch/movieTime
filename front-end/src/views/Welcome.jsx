import React, { Component } from 'react'

export default class Welcome extends Component {
    render() {


        return (

            <div className="pt-5">

                <div className="container">
                    <h1 className="text-center pt-5">Welcome to our website</h1>
                    <h3 className="text-center pt-3">Please sign up to find your favorite movies</h3>

                    <div className="d-flex justify-content-center pt-4">

                        <button className="btn btn-secondary" >Sign up</button>
                    </div>
                </div>
            </div>
        )
    }
}
