import React, { Component } from 'react'
export default class Search extends Component {
    constructor() {
        super()
        this.state = {
            filmTrouver: {}
        }
    }
    changeName = (e) => {
        this.setState({
            name: e.target.value
        })
    }
    getName = () => {
        fetch(`http://localhost:8000/movies/${this.state.name}`)
            .then((response) => response.json())
            .then(result => {
                console.log("result", result)
                if (result !== null) {
                    this.setState({
                        filmTrouver: result
                    })
                } else {
                    this.setState({
                        filmTrouver: {}
                    })
                }
            })
    }
    render() {
        console.log("MovieName:", this.state.name)
        console.log("filmTrouver", this.state.filmTrouver)
        console.log(this.state.filmTrouver)
        return (
            <div class="input-group mb-3 pt-5">
                <input type="text" class="form-control" placeholder="Type a movie's name" aria-label="Recipient's username" aria-describedby="button-addon2" onChange={this.changeName}>
                </input>
                <button class="btn btn-outline-primary" type="button" id="button-addon2" onClick={this.getName}>Search</button>
                <div className="container">
                    {
                        Object.keys(this.state.filmTrouver).length > 0 ? (
                            <div>
                                <p>Title = {this.state.filmTrouver.title}</p>
                                <p>Description = {this.state.filmTrouver.description}</p>
                                <p>Adult Movie = {this.state.filmTrouver.adult ? "✓" : "X"}</p>
                                <img src={this.state.filmTrouver.image} />
                                <p>Note = {this.state.filmTrouver.note}</p>
                                <p>Number of votes so far = {this.state.filmTrouver.voteCount}</p>
                                <p>Genre(s) = {this.state.filmTrouver.genre.map(genre => genre.name).join(", ")}</p>
                                <p>Author(s) = {this.state.filmTrouver.author.map(author => author.name).join(", ")}</p>
                                <p>Actor(s) = {this.state.filmTrouver.actor.map(actor => actor.name).join(", ")}</p>
                                <p>Support = {this.state.filmTrouver.adress.map(adress => adress.type).join(", ")}</p>
                                <p>Name = {this.state.filmTrouver.adress.map(adress => adress.typeName).join(", ")}</p>
                                <p>Where to find = {this.state.filmTrouver.adress.map(adress => adress.adress).join(", ")}</p>
                                <p>Original Language = {this.state.filmTrouver.originalLanguage.map(originalLanguage => originalLanguage.name)}</p>
                            </div>
                        ) : "Entrer un film a rechercher"
                    }
                </div>
            </div>
        )
    }
}