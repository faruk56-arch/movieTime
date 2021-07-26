import React, { Component } from 'react'
import Search from '../views/Search'
import Card from "../components/Card"
import Card2 from "../components/Card2"
import "./homepage.css"

export default class Homepage extends Component {
    constructor() {
        super()
        this.state = {
            movies: [],

        }
    }
    componentDidMount() {
        this.getMovies()
    }
    getMovies() {
        const url = "http://localhost:8000/movies/10"
        fetch(url)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                this.setState({
                    movies: data
                })
            })
    }
    getMovie = (name) => {
        fetch(`http://localhost:8000/movies/${name}`)
            .then((response) => response.json())
            .then(result => {
                console.log("result", result)
                if (result) {
                    this.setState({
                        movies: [result]
                    })
                } else {
                    this.setState({
                        movies: []
                    })
                }
            })
    }
    render() {
        if (this.state.movies.length > 0) {
            return (
                <div>
                    <Search getMovie={this.getMovie} />
                
                    {this.state.movies.length === 1 &&
                        <>
                            {this.state.movies.map(movie => {
                                return <Card2
                                    title={movie.title}
                                    description={movie.description}
                                    image={movie.image}
                                    releaseDate={movie.releaseDate}
                                    genre={movie.genre.map(genre => genre.name).join(", ")}
                                    author={movie.author.map(author => author.name).join(' ')}
                                    actor={movie.actor.map(actor => actor.name).join(', ')}
                                    support={movie.adress.map(adress => adress.type).join(", ")}
                                    // name={movie.adress.map(adress => adress.adress).join(", ")}
                                    whereToFind={movie.adress.map(adress => adress.adress).join(", ")}
                                    originalLanguage={movie.originalLanguage.map(originalLanguage => originalLanguage.name).join(' ')}
                                    note={movie.note}
                                    voteCount={movie.voteCount}
                                />
                            })}
                        </>
                    }
                    {this.state.movies.length > 1 &&
                        <div className=" container-card">
                            {this.state.movies.map(movie => {
                                return <Card
                                    title={movie.title}
                                    description={movie.description}
                                    image={movie.image}
                                    support={movie.adress.map(adress => adress.type).join(", ")}
                                    // name={movie.adress.map(adress => adress.name).join(", ")}
                                    whereToFind={movie.adress.map(adress => adress.adress).join(", ")}
                                    />
                            })}
                        </div>
                    }
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
