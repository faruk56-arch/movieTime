import React, { Component } from 'react'

export default class Contact extends Component {
    render() {
        return (
            <div>

                <div className="container">
                    <h1 className="text-center pt-5">Contact us</h1>
                    <h3 className=" text-info text-center pt-5"> Gaelle Petit</h3>
                    <h3 className="text-center pt-1">gaelle.petit@konexio.eu <br />07 71 74 83 88</h3>
                </div>

                <div className="container">
                    <h3 className="text-info text-center pt-5">Leandro Fernandez</h3>
                    <h3 className="text-center pt-1">leandro.fernandez@konexio.eu</h3>
                </div>
            </div>
        )
    }
}
