import React, { Component } from 'react'
export default class Search extends Component {
    constructor() {
        super()
        this.state = {
            name: ""
        }
    }
    changeName = (e) => {
        this.setState({
            name: e.target.value
        })
    }

    render() {
        console.log("changeName", this.state.name)
        return (
            <div class="input-group mb-3 pt-5">
                <input type="text" class="form-control" placeholder="Type a movie's name" aria-label="Recipient's username" aria-describedby="button-addon2" onChange={this.changeName}>
                </input>
                <button class="btn btn-outline-primary" type="button" id="button-addon2" onClick={() => this.props.getMovie(this.state.name)}>Search</button>
            </div>
        )
    }
}