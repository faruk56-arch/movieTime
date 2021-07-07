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

        return (

            <div class="input-group mb-3 pt-5">
                <input type="text" class="form-control" placeholder="Type a movie's name" aria-label="Recipient's username" aria-describedby="button-addon2" onChange={this.changeName}>
                </input>
                <button class="btn btn-outline-primary" type="button" id="button-addon2" onClick={this.getName}>Search</button>
                <div className="container">


                    {

                        Object.keys(this.state.filmTrouver).length > 0 ? (

                            <div>
                                <p>title = {this.state.filmTrouver.title}</p>
                                <p>description = {this.state.filmTrouver.description}</p>
                                <p>adult = {this.state.filmTrouver.adult ? 'yes' : 'no'}</p>
                                <img src={this.state.filmTrouver.image} />
                                <p>Note = {this.state.filmTrouver.note}</p>
                                <p>voteCount = {this.state.filmTrouver.voteCount}</p>
                                <p>Genre(s) = {this.state.filmTrouver.genre.map(genre => genre.name).join(", ")}</p>
                                <p>author = {this.state.filmTrouver.author.map(author => author.name).join(' ')}</p>
                                <p>actor= {this.state.filmTrouver.actor.map(actor => actor.name).join(', ')}</p>
                                <p>releaseDate = {this.state.filmTrouver.releaseDate}</p>
                                <p>Where to find = {this.state.filmTrouver.adress.map(adress => adress.adress).join(", ")}</p>
                                <p>originalLanguage= {this.state.filmTrouver.originalLanguage.map(originalLanguage => originalLanguage.name).join(' ')}</p>
                            </div>
                        ) : "film ne pas trouvé"
                    }






                </div>
            </div>
        )

    }

}

