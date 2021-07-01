import React, { Component } from 'react'

export default class Homepage extends Component {
    render() {
        return (

            <div class="input-group mb-3 pt-5">
                <input type="text" class="form-control" placeholder="Type a movie's name" aria-label="Recipient's username" aria-describedby="button-addon2">
                </input>
                <button class="btn btn-outline-primary" type="button" id="button-addon2">Search</button>
            </div>

        )
    }
}
