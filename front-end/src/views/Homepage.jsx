import React, { Component } from 'react'
<<<<<<< HEAD
import Search from '../views/Search'
=======
import Card from "../components/Card"
import "./homepage.css"
>>>>>>> dev

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

        const url = "http://localhost:8000/movies/10"

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
                    <Search getName={this.getName}/>
                    <div class="input-group mb-3 pt-5">
                        <input type="text" class="form-control" placeholder="Type a movie's name" aria-label="Recipient's username" aria-describedby="button-addon2">
                        </input>
                        <button class="btn btn-outline-primary" type="button" id="button-addon2">Search</button>
                    </div>
                    <div className = "container-card"> 
                        {this.state.movies.map(movie => {
                            return <Card
                                title={movie.title}
                                description={movie.description}
                                image={movie.image}
                            />
                        })}
                    </div>
                </div>
            )
        }
        return (
            <div>
                data processing
            </div>
        )
    }
}
