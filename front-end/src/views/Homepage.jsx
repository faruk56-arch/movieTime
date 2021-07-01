import React, { Component } from 'react'

export default class Homepage extends Component {

    constructor() {
        super()

        this.state = {
            movies: []
        }

    }

    componentDidMount() {
        this.getMovies()
    }

    getMovies() {
        // console.log("getCountry", country);

        const url = "http://localhost:8000/movies"

        fetch(url)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                // console.log("data in getCountry ", data);

                this.setState({
                    movies: data
                })
            })
    }

    render() {
        console.log(this.state.movies);
        if (this.state.movies.length > 0) {
            return (
                <div>
                    <div class="input-group mb-3 pt-5">
                        <input type="text" class="form-control" placeholder="Type a movie's name" aria-label="Recipient's username" aria-describedby="button-addon2">
                        </input>
                        <button class="btn btn-outline-primary" type="button" id="button-addon2">Search</button>
                    </div>
                    <div>
                        {this.state.movies.map(movie => <div>
                            <p>Title = {movie.title}</p>
                            <p>Description = {movie.description}</p>
                            <p>Adult movie = {movie.adult ? "Oui" : "Non"}</p>
                            <img src={movie.image} />
                            <p>Note = {movie.note}</p>
                            <p>Number of votes so far = {movie.voteCount}</p>
                            <p>Genre(s) = {movie.genre.map(genre => genre.name).join(", ")}</p>
                            <p>Author(s) = {movie.author.map(author => author.name).join(", ")}</p>
                            <p>Actor(s) = {movie.actor.map(actor => actor.name).join(", ")}</p>
                            <p>Support = {movie.adress.map(adress => adress.type).join(", ")}</p>
                            <p>Name = {movie.adress.map(adress => adress.typeName).join(", ")}</p>
                            <p>Where to find = {movie.adress.map(adress => adress.adress).join(", ")}</p>
                            <p>Original Language = {movie.originalLanguage.map(originalLanguage => originalLanguage.name)}</p>
                        </div>)}

                    </div>
                </div>
            )
        }
        return (
            <div>
                date processing
            </div>
        )
    }
}
