import React, { Component } from 'react'
import Search from '../views/Search'
import Card from "../components/Card"
import "./homepage.css"
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
        if (this.state.movies.length > 0) {
            return (
                <div>
                    <Search getName={this.getName}/>
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