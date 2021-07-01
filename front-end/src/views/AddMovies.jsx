import React, { Component } from 'react'

export default class AddMovies extends Component {
    render() {
        return (

            <div className="m-5">

                <div className="container">
                    <h1 className="text-center pt-5">Add latest movies here !</h1>
                    <div class="input-group pt-5">
                        <input type="text" class="form-control" placeholder="Add movie name" aria-label="Recipient's username" aria-describedby="button-addon2">
                        </input>
                        <button class="btn btn-outline-primary" type="button" id="button-addon2">Add</button>
                    </div>
                </div>
            </div>

        )
    }
}
